const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('서버규칙').setDescription('serverRule'),

	new SlashCommandBuilder().setName('위반목록').setDescription('serverwarning'),

	new SlashCommandBuilder().setName('공지사항').setDescription('serverpush')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);