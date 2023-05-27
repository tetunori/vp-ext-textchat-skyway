import TextChatSkyWayExtensionCore from './core'

(function (Scratch) {
  'use strict'

  class TextChatSkyWayExtensionTW extends TextChatSkyWayExtensionCore {
    getApiKey() {
      return window.prompt('SkyWayのAPIキーを入力してください: ', '')
    }
  }

  Scratch.extensions.register(new TextChatSkyWayExtensionTW())
})(Scratch)
