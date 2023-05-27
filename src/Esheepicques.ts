import TextChatSkyWayExtensionCore from './core'

;(function (Scratch) {
  'use strict'

  class TextChatSkyWayExtensionES extends TextChatSkyWayExtensionCore {
    getApiKey() {
      return ''
    }
  }

  Scratch.extensions.register(new TextChatSkyWayExtensionES())
})(Scratch)
