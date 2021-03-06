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
    cardInfo: client.on('message', message => {
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
                            Name: ${cardObj.name}
                            \rPicture: ${cardObj.iconUrls.medium}
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
                    console.log('Error: clientMessage.cardInfo')
                })
        }
    }),
    playerInfo: client.on('message', message =>{
        let prefix = botInitialize.prefix
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length)
        if(args.startsWith('player')) {
            let tag = args.slice(7).toUpperCase()
            if(!tag.startsWith('#')) {
                tag = `#${tag}`
            }
            ClashRoyaleAPI.getPlayerByTag(tag).then((player) => {

                message.channel.send('>>> **Player Stats | Baby Dragon**' + `
                \rName: ${player.name}
                \rClan: ${player.clan.name}
                \rArena: ${player.arena.name}
                \r ${player.arena.id}
                \rWin/Loss Ratio: **W:** ${player.wins} | **L:** ${player.losses} | **W/L Ratio:** ${Math.round(player.wins/player.losses, 3)}`)
            })
            .catch((err) => {
                message.channel.send(`Couldn't find a player by the name of ${tag}!`)
            })
            .catch((err) => {
                console.log('Error: clientMessage.playerInfo')
            }
        }
    }),
    randomMetaDeck: client.on("message", message => {
        if(!message.content.toLowerCase().startsWith('!bd randomdeck')) return

        message.channel.send(randomizeDeck)

        function randomizeDeck() {
            let cards = ClashRoyaleAPI.getCards
            return `this feature isnt programmed yet`
        }
    }),
    kyleIsGay: client.on('message', message => {
        if(message.author.username === 'Byle Karnes' && message.author.discriminator == '6338') {
            message.channel.send(`your gay ${message.author}`)
        }
    }),
    ignition: function() {
        for(i = 0; clientMessage.length - 2; i++){
            clientMessage[i]
        }
    }
}

const ClashData = {

}


//These are the keys. Do not write anything below this line.
botInitialize.ignition();
