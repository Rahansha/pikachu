const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');


Asena.addCommand({ pattern: 'contact ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ʙᴏꜱꜱ\n' // full name
            + 'ORG:script RAHAN;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=config.NBSK:+919539154992\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "ᴄᴏɴᴛᴀᴄᴛ ᴍʏ ʙᴏꜱꜱ", vcard: vcard}, MessageType.contact)
}))
