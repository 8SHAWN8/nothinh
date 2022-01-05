module.exports = {

        name: 'hi',
        aliases: ["res"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Hello how are you?');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Hello how are you?**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('▶ **Hello how are you?**');
        }
        return message.channel.send('**Hello how are you?**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Hello how are you?!**")
      }
    }
};
//2
module.exports = {

        name: 'hello',
        aliases: ["res"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('Hi how are you?');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**Hi how are you?**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('▶ **Hi how are you?**');
        }
        return message.channel.send('**Hi how are you?**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**Hi how are you?!**")
      }
    }
};

//3

module.exports = {

        name: '@!   ToXicツ EvAn 👑',
        aliases: ["res"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('I think he is offline, Kindly dm him :)');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**I think he is offline, Kindly dm him :)**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('▶ **I think he is offline, Kindly dm him :)**');
        }
        return message.channel.send('**I think he is offline, Kindly dm him :)**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**I think he is offline, Kindly dm him :)**")
      }
    }
};
//4
module.exports = {

        name: 'fine',
        aliases: ["res"],
        category: "music",
        description: 'resumes music',
        usage: " ",
        accessableby: "everyone",
    run: async (bot, message, args, ops) => {
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send('OK.');
        const serverQueue = ops.queue.get(message.guild.id);
        if (message.guild.me.voice.channel !== message.member.voice.channel) {
            return message.channel.send("**OK.**");
        }
      try {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send('▶ **OK.**');
        }
        return message.channel.send('**OK.**.');
      } catch {
        serverQueue.connection.dispatcher.end();
        return message.channel.send("**OK.**")
      }
    }
};



