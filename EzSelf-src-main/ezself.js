const Discord = require('discord.js');
const bot = new Discord.Client();
var random = 0;
const { prefix, token } = require('./config.json')


var spammsg = ("**EZ**"); //Votre message[ à spam "spam msg"
var spamgif = (""); //Votre gif/imf à spam "spam gif"
var spamserver = (""); //Votre serveur/lien à spam "spam server"

bot.on("ready", () => {
    console.log("       ");
    console.log("█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗");
    console.log("╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝");
    console.log("       ");
    console.log("███████╗███████╗███████╗███████╗██╗     ███████╗");
    console.log("██╔════╝╚══███╔╝██╔════╝██╔════╝██║     ██╔════╝");
    console.log("█████╗    ███╔╝ ███████╗█████╗  ██║     █████╗");
    console.log("██╔══╝   ███╔╝  ╚════██║██╔══╝  ██║     ██╔══╝");
    console.log("███████╗███████╗███████║███████╗███████╗██║");
    console.log("╚══════╝╚══════╝╚══════╝╚══════╝╚══════╝╚═╝");
    console.log("       ");
    console.log("█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗");
    console.log("╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝");
    console.log("       ");
    console.log("Version : V1.7");
    console.log("Pseudo :" + bot.user.username);
    console.log("Votre prefix :" + prefix)
});

function humeur(i, h) {
    i = Math.ceil(0);
    h = Math.floor(2);
    random = Math.floor(Math.random() * (h - i + 1) + i)
}
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + "help") {
        message.delete();
        let a = new Discord.RichEmbed()
            .setTitle("**Menu d'aide** Prefix :" + prefix)
            .addField(":boom:help", "**C'est ceci**")
            .addField(":boom:gif", "**Des magnifiques images animés !**")
            .addField(":boom:fun", "**Ce sont des blagues (:**")
            .addField(":boom:outils", "**C'est dans le nom (:**")
            .addField(":boom:raid", "**Raid les serveurs cancer (:**")
            .addField(":boom:changelog", "**Voir les nouveaux ajouts de chaque mise à jour !**")
            .setColor(AB0000)
            .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
            .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + "gif") {
        message.delete();
        let a = new Discord.RichEmbed()
            .setTitle("**Menu des gifs**")
            .setDescription('**:boom:issou \n' +
                ' :boom:fib \n' +
                ' :boom:party \n' +
                ' :boom:hide \n' +
                ' :boom:tg \n' +
                ' :boom:rage \n' +
                ' :boom:haha \n' +
                ':boom:genie \n' +
                ' \n' +
                ' ** *Exemple : :boom:gif <gif>*')
            .setColor(AB0000)
            .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
            .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + "gif issou") {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'gif fib') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://thumbs.gfycat.com/DizzyClearcutKookaburra-max-1mb.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'gif party') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://media1.tenor.com/images/9bf8ef57e41298134471103362475365/tenor.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'gif tg') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/abec253a3a9d6701101bb0d786a2a697/tenor.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'gif rage') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/5abb05d6e857e0e660b2258bc450ca12/tenor.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'gif haha') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/94fdca75e958652f645f50b3b76c679e/tenor.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});


bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'gif genie') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'ping') {
        console.log('');
        console.log('Voici votre ping : ' + bot.ping + 'ms');
        console.log('');
        message.delete()
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'fun') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**Menu des commande de fun**')
        .addField(':boom:hack', 'Hack la nasa')
        .addField(':boom:ddos', 'Lance un fausse attaque DDOS')
        .addField(':boom:pavet', 'Envoie un énorme message')
        .addField(':boom:blague', 'Des blagues droles :)')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});

bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'ddos') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**DDOS BY **' + bot.user.username)
        .addField("ÉTAT DE L'ATTAQUE", '``ATTAQUE ENVOYÉ !``')
        .addField('IP', '``92.195.27.88``')
        .addField('PAQUETS', '``800``')
        .addField('PORT', '``92``')
        .addBlankField()
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'changelog') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**Changelog**')
        .addField('V1.0', '**Ajout de la commande raid + fun**')
        .addField('V1.1', '**Amélioration de toutes les commandes**')
        .addField('V1.2', '**Ajout du SPAM (merdique) (à config dans ezself.js)**')
        .addField('V1.4', '**Ajout des blagues (extrèment drole !)**')
        .addField('V1.5', '**Fix du raid**')
        .addField('V1.6', '**Ajout des presences**')
        .addField('V1.7', '**Ajout de la cmd say**')
        .addBlankField()
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'spam') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**Menu des spam**')
        .setDescription('** :boom:msg \n' +
        ' :boom:server \n' +
        ' :boom:gif \n' +
        ' \n' +
        ' ** *Exemple : :boom:spam <...>*')
        .addBlankField()
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'spam msg') {
        message.delete();
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg);
        message.channel.send(spammsg)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'spam server') {
        message.delete();
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver);
        message.channel.send(spamserver)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'spam gif') {
        message.delete();
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif);
        message.channel.send(spamgif)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'shutdown') {
        message.delete();
        bot.destroy()
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'outils') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle("**Menu d'outils**")
        .addField(':boom:presence', 'presence [text]')
        .addField(':boom:spam', 'Envoie énormément de message (A config dans ezself.js) ')
        .addField(':boom:info', "Pour avoir tes informations discord ^^'")
        .addField(':boom:shutdown', 'Stop le EzSelf')
        .addField(':boom:purge', 'Supprime tous tes messages')
        .addField(':boom:say', 'say [text]')
        .addField(':boom:sondage', 'sondage [text]')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content.startsWith(prefix + 'presence')) {
        let c = message.content.slice(10);
        message.delete();
        if (!c) {
            return message.channel.send('>>> ' + prefix + 'presence **[texte]**')
        };
        bot.user.setPresence({
            game: {
                name: c,
                type: streaming,
                url: "https://www.twitch.tv/ezself"
            }
        });
        message.channel.send('Ta presence : **' + c + '** !')
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'pavet') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**Pavet :)**')
        .setDescription("**Débarrassée de l'amulette se craqueler comme un oeuf, aplatis aux deux bouts de la terre ouverte et monta dans une nacelle et nous sourire du milieu des peuples. Quelque système que nous embrassions sur la cause, égaya son front sérieux. Charlatanisme des romans pour le voir. Privé de mes boyaux et de ma pensée que je suis avec lui. Déballée de sa couverture, à l'étape. Ensemble ils chantaient, les autres bandits accoururent du corridor. Étonnés de cette fermeture, lorsqu'on amena le quatorzième enfant, tout cela le câlinait en clignotant de l'oeil, éclata en sanglots. Fréquemment il faisait appel à la raison et qu'il portait le petit prince fut très malade, et mourut tout imprégné, d'absinthe.Sorti d'une des fenêtres. Sur-le-champ, à travers cette légère couche d'emprunt. Ceux en agonie regardaient blanchir, mourir leurs mains étalées au long des années qui comptaient double. Agités par toute une foule applaudissait. Examinons les faits d'avance, les deux sociétés finissaient par se résigner. Dernier chapitre, les combattants s'avancèrent sur des sortes de persiennes. Sceptre de la science sous le nom badin de chair à demi cuite qu'elle rongeait.Quelle était leur distribution initiale. Sentier peu fréquenté, et de pénétrer dans les petits domaines comme dans les annales du bac, et nous avons bébé à nous deux ? Sagement administrée, elle lui rendit la vie plus qu'il était la comédie préludant au drame. Point besoin de reconnaître avec vous le long de quelques rues commerçantes, ces demeures affectent un air de grande honnêteté. Reconduit par les moines, impitoyables, répugnants, je les méprise autant que tes malhonnêtetés.**")
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'raid') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**Menu raid**')
        .addField(':boom:dc', 'Supprime tout les channel')
        .addField(':boom:dcs', 'Supprime le channel ou vous avez fait la commande')
        .addField(':boom:dra', 'Supprime tous les rôles')
        .addField(':boom:cc', 'Crée beacoup de channel')
        .addField(':boom:cn', 'Change le nom du serveur (rapidement)')
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'dc') {
        message.delete();
        message.guild.channels.forEach((d) => d.delete());
        message.guild.createChannel('fucked by EZSELF', 'text')
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'dcs') {
        message.delete();
        message.channel.delete();
        message.guild.createChannel('fucked by EZSELF', 'text')
    }
});
bot.on("message", message => {
    if (message.content === prefix + 'dra') {
        message.delete();
        message.guild.roles.map((r) => {
            if (r.editable) {
                if (r.name === '@everyone') {
                    return
                };
                r.delete()
            }
        })
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'info') {
        message.delete();
        let a = new Discord.RichEmbed()
        .setTitle('**Information**')
        .addField('Ton pseudo :  ', bot.user.username)
        .addField('Ton prefix :  ', prefix)
        .addField('Ton ID :  ', bot.user.id)
        .setColor(AB0000)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
        .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
        message.channel.send(a)
    }
});
bot.on("message", message => {
    if (message.content === prefix + 'blague') {
        if (message.author.id !== bot.user.id) {
            return
        };
        message.delete();
        humeur();
        if (random === 0) {
            let a = new Discord.RichEmbed()
            .setTitle('**Blague**')
            .addField("J'ai un blague à deux balle ", 'Panpan !')
            .setColor(AB0000)
            .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
            .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
            message.channel.send(a)
        };
        if (random === 1) {
            let a = new Discord.RichEmbed()
            .setTitle('**Blague**')
            .addField('Quesque qui est jaune et qui attend ?', 'La frappe dans pochtar')
            .setColor(AB0000)
            .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
            .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
            message.channel.send(a)
        };
        if (random === 2) {
            let a = new Discord.RichEmbed()
            .setTitle('**Blague**')
            .addField('Dans quel pays ne bronze-t-on pas du nez ?', 'Au Népal')
            .setColor(AB0000)
            .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif")
            .setImage("https://cdn.discordapp.com/attachments/436828835506421770/664868665111347251/ezself.gif");
            message.channel.send(a)
        }
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'cn') {
        message.delete();
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF');
        message.guild.setName('EzSelf');
        message.guild.setName('FUCKED BY EZSELF')
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'purge') {
        message.delete();
        message.channel.fetchMessages().then(message => message.forEach((f) => f.delete()))
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'dcs') {
        message.delete();
        message.channel.delete();
        message.guild.createChannel('fucked by EZSELF', 'text')
    }
});
bot.on("message", message => {
    if (message.author.id !== bot.user.id) {
        return
    };
    if (message.content === prefix + 'cc') {
        message.delete();
        message.guild.channels.forEach((d) => d.delete());
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'text');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice');
        message.guild.createChannel('fucked by EZSELF', 'voice')
    }
});
bot.on("message", message => {
    if (message.content.startsWith(prefix + 'say')) {
        let c = message.content.slice(5);
        message.delete();
        if (!c) {
            return message.channel.send('>>> ' + prefix + 'say **[texte]**')
        };
        var g = new Discord.RichEmbed()
        .setColor(AB0000)
        .setDescription(c)
        .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
        message.channel.sendMessage(g)
    }
});
bot.on("message", message => {
    if (message.content.startsWith(prefix + 'sondage')) {
        let c = message.content.slice(10);
        message.delete();
        if (!c) {
            return message.channel.send('>>> ' + prefix + 'sondage **[texte]**')
        };
        var a = new Discord.RichEmbed()
            .setTitle("**Sondage**")
            .setColor(AB0000)
            .addField("*✅ = Vrai\n\n❌ = Faux*", "** **")
            .setDescription('► ' + c + ' \n \n')
            .setFooter("By Fontesie", "https://cdn.discordapp.com/attachments/645721400169988096/652245594248577024/a_3b8f2ad9612eebde87e7e8bb36dda768.gif");
            message.channel.sendMessage(a).then(function message() {
            message.react('✅');
            message.react('❌')
        })
    }
});

bot.login(token)
