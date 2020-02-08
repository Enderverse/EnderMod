const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: (language) => language.get(`COMMAND_${this.name.toUpperCase()}_DESCRIPTION`),
			permissionLevel: 10,
			runIn: [ 'text' ],
			requiredPermissions: [ 'KICK_MEMBERS' ],
			usage: '<member:member>',
			usageDelim: undefined
		});
	}

	async run(message, [ member, reason ]) {
		if (member.id === this.client.user.id) throw `${this.client.user.username} cannot be kicked.`;
		if (member.id === message.author.id) throw message.guild.language.get('COMMAND_KICK_CANNOT_YOU');

		if (!member.kickable) throw `${this.client.user.username} cannot kick this user.`;
		if (member.roles.highest.position >= message.member.roles.highest.position) throw message.guild.language.get('COMMAND_KICK_CANNOT', [ member ]);

		await member.kick(reason);
		return message.sendLocale('COMMAND_KICK', member);
	}

};
