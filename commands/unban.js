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
		const banned = await message.guild.fetchBans();
		if (banned.has(user.id)) {
			await message.guild.members.unban(user, reason);
			return message.sendLocale('COMMAND_UNBAN', user);
		}

		throw `**${user.tag}** not found among banned users.`;
	}

};
