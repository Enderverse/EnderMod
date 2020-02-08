const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: (language) => language.get(`COMMAND_${this.name.toUpperCase()}_DESCRIPTION`),
			permissionLevel: 10,
			runIn: [ 'text' ],
			requiredPermissions: [ 'MANAGE_ROLES' ],
			requiredSettings: [ 'options.roles.muted' ],
			usage: '<member:member>',
			usageDelim: undefined
		});
	}

	async run(message, [ member, reason ]) {
		if (member.id === this.client.user.id) throw `${this.client.user.username} cannot be muted.`;
		if (member.id === message.author.id) throw message.guild.language.get('COMMAND_MUTE_CANNOT_YOU');

		if (member.roles.has(message.guild.settings.get('options.roles.muted'))) throw message.guild.language.get('COMMAND_MUTE_ALREADY_MUTED', [ member ]);
		if (!member.manageable) throw `${this.client.user.username} cannot mute this user.`;
		if (member.roles.highest.position >= message.member.roles.highest.position) throw message.guild.language.get('COMMAND_MUTE_CANNOT', [ member ]);

		await member.kick(reason);
		return message.sendLocale('COMMAND_MUTE', member);
	}

};
