bot.on("message", async message => {
                if (message.author.bot) return;
                if (message.channel.type === "dm") return;

                let prefix = botconfig.prefix;
                let messageArray = message.content.split(" ");
                let cmd = messageArray[0];
                let args = messageArray.slice(1);

                if (cmd === `${prefix}weed`) {
                    return message.channel.send("**Smoking!**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.edit(`**Finished smoking!**`);
                        }, 1500);
                        setTimeout(() => {
                            msg.delete(`**Finished Smoking!**`);
                        }, 6000);
                    });
                };
