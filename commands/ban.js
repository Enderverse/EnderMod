const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: (language) => language.get(`COMMAND_${this.name.toUpperCase()}_DESCRIPTION`),
			permissionLevel: 10,
			runIn: [ 'text' ],
			requiredPermissions: [ 'BAN_MEMBERS' ],
			usage: '<user:user>',
			usageDelim: ' '
		});
	}

	async run(message, [ user, reason ]) {
		if (user.id === this.client.user.id) throw `${this.client.user.username} cannot be banned.`;
		if (user.id === message.author.id) throw message.guild.language.get('COMMAND_BAN_CANNOT_YOU');

		const member = await message.guild.members.fetch(user).catch(() => null);
		if (member) {
			if (!member.bannable) throw `${this.client.user.username} cannot ban this user.`;
			if (member.roles.highest.position >= message.member.roles.highest.position) throw message.guild.language.get('COMMAND_BAN_CANNOT', [ member ]);
		}

		const options = {};
		if (reason) options.reason = reason;

		await message.guild.members.ban(user, options);
		return message.sendLocale('COMMAND_BAN', user);
	}

};
