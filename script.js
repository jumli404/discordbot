let prefix = "!joke"
let mem = "!meme"
let first;
let second;
let { Client, GatewayIntentBits } = require('discord.js')

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
            if (num != 0) {
                console.log('This data content Array')
                mes.send('‎ ‎')
                mes.send({ files: [data[output][2]] })
                mes.send('‎ ‎')

            }
            else {


                first = data[output]
                second = data[outpu]
                mes.send(first.trim())
                console.log(`first joke : ${first}`)

                setTimeout(() => {
                    if (outpu != null) {
                        mes.send('‎ ‎')
                        mes.send(second.trim())
                        console.log(`second joke : ${second}`)
                        mes.send('‎ ‎')

                    }

                }, 3000);

            }
        }


        ).catch(error => {
            console.log('API NOT RESPONDING')

            let joke = Con('1249686941440413706', 'https://v2.jokeapi.dev/joke/Any', 'setup', 'delivery', "0")
            meme()


        })


}
let start = setInterval(() => {

    console.log("sending joke......")
    let joke = Con('1249686941440413706', 'https://v2.jokeapi.dev/joke/Any', 'setup', 'delivery', "0")
    meme()

}, 3600000)
function meme() {

    console.log("sending meme.......")
    let m = Con('1250043669306802257', "https://meme-api.com/gimme", "preview", '2')


}


c.on('messageCreate', m => {
    if (m.content.toLowerCase().startsWith(prefix)) {
        console.log(`A user name : ${m.author.username}  used !joke`)
        let joke = Con('1249686941440413706', 'https://v2.jokeapi.dev/joke/Any', 'setup', 'delivery', "0")



    }
    if (m.content.toLowerCase().startsWith(mem)) {
        console.log(`A user name :${m.author.username}  used !meme`)
        console.log('-------------------------')
        let me = Con('1250043669306802257', "https://meme-api.com/gimme", "preview", '2')

    }
})





c.login('token')
