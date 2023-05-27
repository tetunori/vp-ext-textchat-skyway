import TextChatSkyWayExtensionCore from './core'

class TextChatSkyWayExtension extends TextChatSkyWayExtensionCore {
  getApiKey() {
    return window.prompt('SkyWayのAPIキーを入力してください: ', '')
  }
}

Scratch.extensions.register(new TextChatSkyWayExtension())
