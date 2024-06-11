
let prefix = "!joke"
let mem = "!meme"
let { Client, GatewayIntentBits } = require('discord.js')
const { file } = require('googleapis/build/src/apis/file')
let c = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageTyping] })
c.once('ready', () => {
    console.log('----------------------')
    console.log('start')
    console.log('----------------------')

})
let Con = (channel, API, output, outpu, num) => {
    let mes = c.channels.cache.get(channel)

    console.log(API)
    fetch(API)
        .then(res => res.json()

        )
        .then(data => {
            console.log(output)
            if (num != 0) {
                console.log('array')
                //console.log(data[output][2])
                //mes.send({file:[data[output][2]]})
                mes.send('‎ ‎')
                mes.send({ files: [data[output][2]] })
                mes.send('‎ ‎')

            }
            else {



                mes.send(data[output])
                // console.log(data[output])
                setTimeout(() => {
                    if (outpu != null) {
                        mes.send('‎ ‎')
                        mes.send(data[outpu])
                        console.log(data[outpu])
                        mes.send('‎ ‎')

                    }

                }, 3000);

            }
        }


        ).catch(error => {
            console.log('API NOT RESPONDING')


        })


}
setInterval(() => {
    console.log('joke')
    let joke = Con('', 'https://v2.jokeapi.dev/joke/Any', 'setup', 'delivery', "0")
    meme()

}, 3600000)
function meme() {
    console.log('meme')
    let m = Con('', "https://meme-api.com/gimme", "preview", '2')


}


c.on('messageCreate', m => {
    if (m.content.startsWith(prefix)) {
        let joke = Con('', 'https://v2.jokeapi.dev/joke/Any', 'setup', 'delivery', "0")
        // let jok = Con('', 'https://v2.jokeapi.dev/joke/Any', 'setup', 'delivery')


    }
    if (m.content.startsWith(mem)) {
        let m = Con('', "https://meme-api.com/gimme", "preview", '2')

    }
})



c.login('token')
