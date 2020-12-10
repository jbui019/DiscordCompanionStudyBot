// import { DiscordBot } from '../DiscordBot';
// import{ Client, Message } from 'discord.js';
import { DiscordBot } from './mocks/DiscordBotMock';
require('dotenv').config();

describe('DiscordBotTest', () => {
    describe('isOneInstance', () => {
        it('should not have more than one instance', () => {
            let bot = DiscordBot.getInstance();
            let bot2 = DiscordBot.getInstance();
            expect(bot).toEqual(DiscordBot.getInstance());
            expect(bot).toEqual(bot2);
        });
    });
});


// let bot = DiscordBot.getInstance();
// bot.connect();

// describe('DiscordBotTest', () => {
//     describe('isOneInstance', () => {
//         it('should not have more than one instance', () => {
//             expect(bot).toEqual(DiscordBot.getInstance());
//         });
//     });
// });

// bot.disconnect();
