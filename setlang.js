const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: 'setlang',
    description: 'prefix command.',
    async execute(  message) {
      let config = require("../config.json")
     
      const messageArray = message.content.split(' ');
      const args = messageArray.slice(1);
      let sEmbed1 = new Discord.MessageEmbed()
      .setColor("#FF0000") 
      .setTitle("Permission declined") 
      .setDescription("<:dont:803357503412502588> | You don't have the permission for this command. (`MANAGE_GUILD`)"); 
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(sEmbed1);
        if(!args[0] || args[0 == "help"]) return message.channel.send("Usage: !setlang <the language here> (Only 3 language are disponible FR, ES, EN)"); 
      
        const lang = JSON.parse(fs.readFileSync("./langs.json", "utf8")); 
      
       
      if(args[0] === "FR", "EN", "ES") { 
        lang[message.guild.id] = { 
            lang: args[0]
          };
          fs.writeFile("./langs.json", JSON.stringify(lang), (err) => { 
          if (err) console.log(err)
          console.log("a")
        });
      }
        
      
        let sEmbed = new Discord.MessageEmbed()
        .setColor("#FF9900")
        .setTitle(`<:success:798475587236790332> | Saved`)
        .setDescription(`New language : ${args[0]}`); 
      
        message.channel.send(sEmbed);
    }
}