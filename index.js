// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {

	client.on('interactionCreate', async interaction => {
		if (!interaction.isChatInputCommand()) return;
	
		const { commandName } = interaction;
	
		if (commandName === '서버규칙') {
			await interaction.reply('놀이터 서버의 기본적인 규칙입니다\n이서버에서 욕설 및 수치심을 주는 행위 및 언행은 규칙 위반에 해당하며\n위반할 때 마다 경고는 +1만큼 누적됩니다\n만약 불합리한 판정으로 처벌 받을 경우 서버에서 상의하지 마시고\n서버운영자 혹은 서버메니저한테 개인 메시지를 주시면 됩니다\n만약 서버에서 상의하실경우 경고는 +3만큼 누적됩니다\n만약 경고가 5회 이상일 경우 자동 강제퇴장 조치가 들어갈 수 있는점 고려해 주시기 바랍니다');
		}

		if (commandName === '위반목록') {
			await interaction.reply('현재 존재하는 위반사항 해당목록은\n욕설(단순욕설,패드립,섹드립),\n다른 사용자의 피해신고(피해강도는 AI가 처리함)\n서버에서 공개적으로 상의하는 경우\n등 이 있습니다\n*만약 처벌받은 경우 상의 및 합의는 서버 운영자나 서버 메니저에게 개인 메세지로 보내시면 확인 후 강도나 진정성에 따라 처벌을 면제 하겠습니다\n(AI가 인식하여 처리하기 때문에 오류가 있을 수 있는점 양해 부탁드립니다)');
		}
	});

	console.log('I am Ready!');
});

client.login(token);