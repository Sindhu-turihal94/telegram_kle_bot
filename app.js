// telegram
const {Telegraf} = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx)=>{ctx.reply('hello i am kle bot')})
bot.command('kle',(ctx)=>{ctx.reply('kle offer BCA 0% placement ')})
bot.command('link',(ctx)=>{ctx.replyWithHTML('<a>http://www.klescpdds.edu.in</a>')})
bot.command('location',(ctx)=>{ctx.replyWithLocation(16.39,75.11)})
bot.command('meme',async (ctx)=>await ctx.replyWithAnimation('https://media1.tenor.com/m/Y8gwdLVmlI0AAAAC/gilli-nata.gif'))
bot.command('audio',async(ctx)=>await ctx.replyWithAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'))
bot.launch();