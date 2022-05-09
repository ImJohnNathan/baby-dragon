const Discord = require('discord.js')
const clashroyalemodule = require('@varandas/clash-royale-api')

const Tokens = {
    discordApiToken: 'OTcyNjg5ODY0OTEyOTQ5Mjk4.GGwYje.ytUJjSVJLKGxLPxSFVSZHkjtS071Rw7kCtcPzo',
    clashRoyaleApiToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQyMmMwMjczLTRmODAtNDE0OC1iYmU2LTk5NWI5YWQ0NGRmNCIsImlhdCI6MTY1MTk3ODc3OCwic3ViIjoiZGV2ZWxvcGVyLzliMGQxMjE3LWExYzktNjFkZS01ZDBhLTU2YWI0MjM3ZjFlZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNC40Mi4yMjEuMTc0Il0sInR5cGUiOiJjbGllbnQifV19.Hgi_vYFCp58_aJNvNGa_iKLsMhUNkt5eAuMm9KWpbGEB2NMolJ5_38z2yhnzfZELf6UEgGi376Orf_4j15NYjg',
}

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const ClashRoyaleAPI = new clashroyalemodule.ClashRoyaleAPI(Tokens.clashRoyaleApiToken)

const botInitialize = {
    prefix: "!bd ",
    ignition: function () {
        client.login(Tokens.discordApiToken)
        client.once('ready', () => {
            console.log('Baby Dragon v0.1.0 has loaded successfully!')
            client.user.setPresence({
                status: "online"
            })
        })
        clientMessage.ignition()
    }
}

const clientMessage = {
    commandHandler: client.on('message', message => {
        let prefix = botInitialize.prefix
        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length)

        if(args.startsWith('cardinfo')){
            let rawCard = args.slice(9)
            let card = args.slice(9).toLowerCase()
            ClashRoyaleAPI.getCards()
                .then((cards) => {
                    let cardObj = null
                    message.channel.send(`Searching for card statistics on **${rawCard}**...`)
                    for(i = 0; cards.length; i++) {
                        let CycledCard = cards[i]
                        if(CycledCard.name.toLowerCase() === card) {
                            cardObj = CycledCard
                            message.channel.send(`
                            **Card Info**\n
                            Name: ${cardObj.name} \n
                            Picture: ${cardObj.iconUrls.medium}
                            `)
                            break
                        }
                    }
                    if(cardObj === null) {
                        message.channel.send('Card not found! Check spelling and try again!')
                    }
                })
                .catch((err) => {
                    // handle errors
                    console.log('error')
                })
        }

        if(args.startsWith('embedtest')) {
            let ]
        }
    }),
    ignition: function() {
        for(i = 0; clientMessage.length - 1; i++){
            clientMessage[i]
        }
    }
}

const messageTable = {
    const exampleEmbed: new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
}

//These are the keys. Do not write anything below this line.
botInitialize.ignition();