const Discord = require('discord.js')
const ClashRoyaleAPI = {
    api: require('clash-royale-api'),

}

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

const Tokens = {
    discordApiToken: 'OTcyNjg5ODY0OTEyOTQ5Mjk4.GGwYje.ytUJjSVJLKGxLPxSFVSZHkjtS071Rw7kCtcPzo',
    clashRoyaleApiToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQyMmMwMjczLTRmODAtNDE0OC1iYmU2LTk5NWI5YWQ0NGRmNCIsImlhdCI6MTY1MTk3ODc3OCwic3ViIjoiZGV2ZWxvcGVyLzliMGQxMjE3LWExYzktNjFkZS01ZDBhLTU2YWI0MjM3ZjFlZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyNC40Mi4yMjEuMTc0Il0sInR5cGUiOiJjbGllbnQifV19.Hgi_vYFCp58_aJNvNGa_iKLsMhUNkt5eAuMm9KWpbGEB2NMolJ5_38z2yhnzfZELf6UEgGi376Orf_4j15NYjg',
}

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

        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        switch(command){
            case 'Test':
                message.channel.send('sex')
                break
            default:
                break
        }
    }),
    ignition: function() {
        for(i = 0; clientMessage.length - 1; i++){
            clientMessage[i]
        }
    }
}

//These are the keys. Do not write anything below this line.
botInitialize.ignition();

clientMessage.commandHandler