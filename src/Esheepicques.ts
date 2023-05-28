import TextChatSkyWayExtensionCore from './core'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'

(function (Scratch) {
  'use strict'

  class TextChatSkyWayExtensionES extends TextChatSkyWayExtensionCore {
    private static _apikey: string = ''

    getApiKey() {
      return TextChatSkyWayExtensionES._apikey
    }

    getInfo() {
      const retObj = super.getInfo()
      retObj.blocks.unshift({
        opcode: 'registApiKey',
        blockType: BlockType.COMMAND,
        text: 'APIキー [APIKEY] を登録する',
        arguments: {
          APIKEY: {
            type: ArgumentType.STRING,
            defaultValue: 'APIキー'
          }
        }
      })
      return retObj
    }

    registApiKey(args) {
      // console.log('registApiKey: ' + args.APIKEY)
      TextChatSkyWayExtensionES._apikey = args.APIKEY
      this.inputApiKey()
    }
  }
  Scratch.extensions.register(new TextChatSkyWayExtensionES())
})(Scratch)
