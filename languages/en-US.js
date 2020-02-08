const { Language } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);

		this.language = {
			COMMAND_BAN: (user) => `**${user.tag}** has been banned.`,
			COMMAND_BAN_CANNOT: (user) => `You cannot ban **${user.tag}.`,
			COMMAND_BAN_CANNOT_YOU: 'You cannot ban yourself.',
			COMMAND_BAN_DESCRIPTION: 'Ban a user from the guild.',
			COMMAND_KICK: (member) => `**${member.user.tag}** has been kicked.`,
			COMMAND_KICK_CANNOT: (member) => `You cannot kick **${member.user.tag}**.`,
			COMMAND_KICK_CANNOT_YOU: 'You cannot kick yourself.',
			COMMAND_KICK_DESCRIPTION: 'Kick a user from the guild.',
			COMMAND_MUTE: (member) => `**${member.user.tag}** has been muted.`,
			COMMAND_MUTE_ALREADY_MUTED: (member) => `**${member.user.tag}** is already muted.`,
			COMMAND_MUTE_CANNOT: (member) => `You cannot mute **${member.user.tag}**.`,
			COMMAND_MUTE_CANNOT_YOU: 'You cannot mute yourself.',
			COMMAND_MUTE_DESCRIPTION: 'Mute a user in the guild.',
			COMMAND_PURGE: (messages, limit) => `**${messages}** of the last ${limit} messages have been deleted.`,
			COMMAND_PURGE_DESCRIPTION: 'Delete multiple messages from the channel.',
			COMMAND_UNBAN: (user) => `**${user.tag}** has been unbanned.`,
			COMMAND_UNBAN_DESCRIPTION: 'Unban a user from the guild.',
			COMMAND_UNMUTE: (member) => `**${member.user.tag}** has been unmuted.`,
			COMMAND_UNMUTE_CANNOT: (member) => `You cannot unmute **${member.user.tag}**.`,
			COMMAND_UNMUTE_CANNOT_YOU: 'You cannot unmute yourself.',
			COMMAND_UNMUTE_DESCRIPTION: 'Unmute a user in the guild.',
			COMMAND_UNMUTE_NOT_MUTED: (member) => `**${member.user.tag}** is not muted.`,
			COMMAND_VOICEKICK: (member) => `**${member.user.tag}** has been kicked from voice.`,
			COMMAND_VOICEKICK_CANNOT: (member) => `You cannot kick **${member.user.tag}**.`,
			COMMAND_VOICEKICK_CANNOT_YOU: 'You cannot kick yourself.',
			COMMAND_VOICEKICK_DESCRIPTION: 'Kick a member from voice.',
			COMMAND_VOICEKICK_NOTINVOICE: (member) => `**${member.user.tag}** is not in voice.`
		};
	}

	async init() {
		await super.init();
	}

};
