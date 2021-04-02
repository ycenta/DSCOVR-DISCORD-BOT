const Discord = require('discord.js');
const bot  = new Discord.Client();
var request = require('request');
const TOKEN = process.env.BOT_TOKEN ;
//https://epic.gsfc.nasa.gov/api/natural DSCOVR JSON FILE



bot.on('ready',()=> {	
bot.user.setStatus('idle');
	console.log('bot connecté');
	 bot.user.setGame('with stars');
	
});

bot.on('message',(message)=>	 {
	
	if(message.content=="pong"){
		message.reply("bien reçu")
		
	}
	
	if(message.content=="!terre"){
		request({
  url: 'https://epic.gsfc.nasa.gov/api/natural',
  json: true
}, function(error, response, body) {
	console.log(body[0].image);
	var datePIC=body[0].date;
	message.reply("https://epic.gsfc.nasa.gov/archive/natural/"+datePIC.slice(0,4)+"/"+datePIC.slice(5,7)+"/"+datePIC.slice(8,10)+"/png/"+body[0].image+".png");
	message.reply("Where the satellite is looking at: https://www.google.com/maps/search/?api=1&query="+body[0].coords.centroid_coordinates.lat+","+body[0].coords.centroid_coordinates.lon);
	}); }

	
	});
	
	
bot.login(TOKEN);
