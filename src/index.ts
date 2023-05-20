import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import Cast from 'scratch-vm/src/util/cast'

class TextChatSkyWayExtension {
  private runtime: Runtime

  private gamepadIndex: number

  private static apikey: string = ''
  private receivedChatText: string = ''

  constructor(runtime: Runtime) {
    this.runtime = runtime

    if (TextChatSkyWayExtension.apikey === '') {
      const apikey = window.prompt('SkyWayのAPIキーを入力してください: ', '')
      if (apikey) {
        TextChatSkyWayExtension.apikey = apikey
        console.log(TextChatSkyWayExtension.apikey)
      }
    }
  }

  getInfo() {
    return {
      id: 'testchatskyway',
      name: 'チャット',
      menuIconURI: 'assets/images/menuIcon.png',
      blockIconURI: 'assets/images/menuIcon.png',
      color1: '#e9c46a',
      color2: '#f4a261',
      color3: '#e76f51',

      blocks: [
        {
          opcode: 'joinRoom',
          blockType: BlockType.COMMAND,
          text: '部屋番号 [ROOM] に入室する',
          arguments: {
            ROOM: {
              type: ArgumentType.STRING,
              menu: 'room',
              defaultValue: 'abc'
            }
          }
        },
        {
          opcode: 'sendChatText',
          blockType: BlockType.COMMAND,
          text: 'チャットテキストを送る [TEXT]',
          arguments: {
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        },
        {
          opcode: 'leaveRoom',
          blockType: BlockType.COMMAND,
          text: '退室する',
        },
        {
          opcode: 'whenChatTextReceived',
          blockType: BlockType.HAT,
          text: 'チャットテキストを受け取ったとき',
        },
        {
          opcode: 'getReceivedChatText',
          blockType: BlockType.REPORTER,
          text: '受け取ったテキスト',
        },

      ],

      menus: {
        room: {
          acceptReporters: true,
          items: [
            {
              text: 'abc',
              value: 'abc'
            },
            {
              text: 'ccc',
              value: 'ccc'
            }
          ]
        }
      }
    }
  }

  joinRoom(args) {
    console.log('joinRoom: ' + args.ROOM)
  }

  sendChatText(args) {
    console.log('sendChatText: ' + args.TEXT)
  }

  leaveRoom() {
    console.log('leaveRoom')
  }

  whenChatTextReceived(args) {
    console.log('whenChatTextReceived')
  }

  getReceivedChatText(args) {
    console.log('getReceivedChatText')

    return 'Hello!!!'
  }

}

export default TextChatSkyWayExtension
