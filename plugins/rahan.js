const souravkl11 = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


souravkl11.addCommand({pattern: 'pikachu', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Yes'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'No'}, type: 1}
]
const buttonMessage = {
    contentText: "Pikachu V2 Veeno?",
    footerText: '© RAHAN',
    buttons: buttons,
    headerType: 1
}

       await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    
    }));
