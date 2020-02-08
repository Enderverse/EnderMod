const { Ender: { plugin } } = require('../..');
const { Schema } = require('klasa');

module.exports = {
	[plugin]() {
		if (this.schemas) {
			if (!this.schemas.guilds) this.schemas.guilds = new Schema();

			this.schemas.guilds.add('mod', (schema) => {
				schema.add('config', 'any', { configurable: false });
				schema.add('log', 'boolean', { configurable: false });
			});
		}

		this.commands.registerCoreDirectory(`${__dirname}/`);
		this.languages.registerCoreDirectory(`${__dirname}/`);

		this.console.log('EnderMod loaded.');
	}
};
