const config = require("../configuration.js");
let emoji = config.emoji

module.exports = {
  name: 'playtop',
  description: "Plays the top queue music",
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const string = args.join(' ')
    if (!string) return message.channel.send(`${emoji.error} | Please enter a song url or query to search.`)
    client.distube.play(message.member.voice.channel, string, {
      member: message.member,
      textChannel: message.channel,
      message,
      position: 1
    })
  }
}
