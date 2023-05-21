import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import Peer from 'skyway-js'

class TextChatSkyWayExtension {
  private runtime: Runtime

  private static apikey: string = ''
  private isReceived: boolean = false
  private receivedChatText: string = ''
  private peer: object
  private room: object | undefined = undefined
  private isEntered: boolean = false

  constructor(runtime: Runtime) {
    this.runtime = runtime
    this.inputApiKey()
  }

  inputApiKey() {
    if (TextChatSkyWayExtension.apikey === '') {
      const apikey = window.prompt('SkyWayのAPIキーを入力してください: ', '')

      if (apikey !== '' && apikey !== null) {
        TextChatSkyWayExtension.apikey = apikey
        console.log(TextChatSkyWayExtension.apikey)
        this.peer = new Peer({ key: apikey })
      }
    }
  }

  getInfo() {
    const menuIcon =
      'data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20overflow%3D%22hidden%22%3E%3Cpath%20d%3D%22M12%203C17.5%203%2022%206.58%2022%2011%2022%2015.42%2017.5%2019%2012%2019%2010.76%2019%209.57%2018.82%208.47%2018.5%205.55%2021%202%2021%202%2021%204.33%2018.67%204.7%2017.1%204.75%2016.5%203.05%2015.07%202%2013.13%202%2011%202%206.58%206.5%203%2012%203Z%22%20stroke%3D%22%23595959%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E'
    return {
      id: 'testchatskyway',
      name: 'チャット',
      menuIconURI: menuIcon,
      blockIconURI: menuIcon,
      color1: '#8b5e34',
      color2: '#6f4518',
      color3: '#603808',

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
          opcode: 'whenChatTextReceived',
          blockType: BlockType.HAT,
          text: 'チャットテキストを受け取ったとき'
        },
        {
          opcode: 'getReceivedChatText',
          blockType: BlockType.REPORTER,
          text: '受け取ったテキスト'
        },
        // {
        //   opcode: 'isUserEntered',
        //   blockType: BlockType.BOOLEAN,
        //   text: '[USER] が入室している',
        //   arguments: {
        //     USER: {
        //       type: ArgumentType.STRING,
        //       menu: 'user',
        //       defaultValue: '相手'
        //     }
        //   }
        // },
        {
          opcode: 'whenUserEntered',
          blockType: BlockType.HAT,
          text: '[USER] が [ENTER] したとき',
          arguments: {
            USER: {
              type: ArgumentType.STRING,
              menu: 'user',
              defaultValue: '相手'
            },
            ENTER: {
              type: ArgumentType.STRING,
              menu: 'enter',
              defaultValue: '入室'
            }

          }
        },

        {
          opcode: 'leaveRoom',
          blockType: BlockType.COMMAND,
          text: '退室する'
        }
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
        },
        user: {
          acceptReporters: false,
          items: [
            {
              text: '自分',
              value: '自分'
            },
            {
              text: '相手',
              value: '相手'
            }
          ]
        },
        enter: {
          acceptReporters: false,
          items: [
            {
              text: '入室',
              value: '入室'
            },
            {
              text: '退室',
              value: '退室'
            }
          ]
        }
      }
    }
  }

  joinRoom(args) {
    console.log('joinRoom: ' + args.ROOM)

    // ignored if api key was alread input.
    this.inputApiKey()
    if (!this.peer) {
      return
    }

    if (!this.room) {
      this.room = this.peer.joinRoom(args.ROOM, { mode: 'p2p' })

      this.room.on(
        'open',
        function (data) {
          console.log(args.ROOM + 'に入室しました')
          this.isEntered = true
        }.bind(this)
      )

      this.room.on(
        'data',
        function (data) {
          console.log('received:' + data.data)
          this.receivedChatText = data.data
          this.isReceived = true
        }.bind(this)
      )
    } else {
      console.log('重複して入室はできません。一度退出してください。')
    }
  }

  sendChatText(args) {
    // console.log('sendChatText: ' + args.TEXT)

    if (this.room) {
      this.room.send(args.TEXT)
    }
  }

  leaveRoom() {
    // console.log('leaveRoom')
    if (this.room) {
      this.room.close()
      console.log('退室しました')
      this.isEntered = false
      this.room = undefined
    }
  }

  whenChatTextReceived(args) {
    // console.log('whenChatTextReceived')

    if (this.isReceived) {
      this.isReceived = false
      return true
    }

    return false
  }

  getReceivedChatText(args) {
    // console.log('getReceivedChatText')

    return this.receivedChatText
  }

  // isUserEntered(args) {
  //   console.log('isUserEntered: ' + args.USER)

  //   let retValue = false

  //   if (args.USER === '自分') {
  //     retValue = this.isEntered
  //   } else {
  //     // '相手'
  //     if (this.room && Object.keys(this.room.getPeerConnections()).length > 0) {
  //       retValue = true
  //     }
  //   }

  //   return retValue
  // }

  whenUserEntered(args) {
    // console.log('whenUserEntered: ' + args.USER + ', ' + args.ENTER)

    if( args.USER  === '自分'){
      return args.ENTER === '入室' ? this.isEntered : !this.isEntered;
    }else{
      const cond = this.room && Object.keys(this.room.getPeerConnections()).length > 0;
      return args.ENTER === '入室' ? cond : !cond;
    }

  }

}

export default TextChatSkyWayExtension
