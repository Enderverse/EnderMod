const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [ 'vkick' ],
			description: (language) => language.get(`COMMAND_${this.name.toUpperCase()}_DESCRIPTION`),
			permissionLevel: 10,
			runIn: [ 'text' ],
			requiredPermissions: [ 'MOVE_MEMBERS' ],
			usage: '<member:member>',
			usageDelim: undefined
		});
	}

	async run(message, [ member, reason ]) {
		if (member.id === this.client.user.id) throw `${this.client.user.username} cannot be kicked.`;
		if (member.id === message.author.id) throw message.guild.language.get('COMMAND_VOICEKICK_CANNOT_YOU');

		if (!member.voice) throw message.guild.language.get('COMMAND_VOICEKICK_NOTINVOICE', [ member ]);
		if (member.roles.highest.position >= message.member.roles.highest.position) throw message.guild.language.get('COMMAND_VOICEKICK_CANNOT', [ member ]);

		await member.voice.kick(reason);
		return message.sendLocale('COMMAND_VOICEKICK', member);
	}

};
