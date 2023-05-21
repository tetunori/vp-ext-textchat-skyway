import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import Cast from 'scratch-vm/src/util/cast'
import Peer from 'skyway-js';


class TextChatSkyWayExtension {
  private runtime: Runtime

  private gamepadIndex: number

  private static apikey: string = ''
  private isReceived: boolean = false
  private receivedChatText: string = ''
  private peer: object
  private skywayContext: object
  private room: object | undefined = undefined

  constructor(runtime: Runtime) {
    this.runtime = runtime

    if (TextChatSkyWayExtension.apikey === '') {
      const apikey = window.prompt('SkyWayのAPIキーを入力してください: ', '')
      if (apikey) {
        TextChatSkyWayExtension.apikey = apikey
        console.log(TextChatSkyWayExtension.apikey)
        this.peer = new Peer({key: apikey})

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

    if(!this.room){
      this.room = this.peer.joinRoom(args.ROOM, {mode: 'p2p'});
      console.log(args.ROOM + 'に入室しました');

      this.room.on('data', function(data){
        console.log('received:' + data.data);
        this.receivedChatText = data.data
        this.isReceived = true;
      }.bind(this));

    }else{
      console.log('重複して入室はできません。一度退出してください。');
    }

  }

  sendChatText(args) {
    // console.log('sendChatText: ' + args.TEXT)

    if(this.room){
      this.room.send(args.TEXT);
    }
  }

  leaveRoom() {
    // console.log('leaveRoom')
    if(this.room){
      this.room.close();
      console.log('退室しました')
      this.room = undefined;
    }

  }

  whenChatTextReceived(args) {
    // console.log('whenChatTextReceived')

    if(this.isReceived){
      this.isReceived = false
      return true
    }

    return false;

  }

  getReceivedChatText(args) {
    // console.log('getReceivedChatText')

    return this.receivedChatText;
  }



}

export default TextChatSkyWayExtension
