import TextChatSkyWayExtensionCore from './core'

(function (Scratch) {
  'use strict'

  class TextChatSkyWayExtensionTW extends TextChatSkyWayExtensionCore {
    private isPeerConnected: boolean = false

    constructor(...args) {
      super(...args)
      setInterval(this.pollingPeerConnection.bind(this), 100)
    }

    pollingPeerConnection() {
      if (this.isPeerConnected) {
        if (!this.room || (this.room && Object.keys(this.room.getPeerConnections()).length < 1)) {
          this.isPeerConnected = false
          Scratch.vm.runtime.startHats('textchatskyway_whenUserEntered', {
            USER: '相手',
            ENTER: '退室'
          })
        }
      } else {
        if (this.room && Object.keys(this.room.getPeerConnections()).length > 0) {
          this.isPeerConnected = true
          Scratch.vm.runtime.startHats('textchatskyway_whenUserEntered', {
            USER: '相手',
            ENTER: '入室'
          })
        }
      }
    }

    getInfo() {
      const info = super.getInfo()

      const wctr = info.blocks.find(block => block.opcode === 'whenChatTextReceived')
      wctr.isEdgeActivated = false

      const wue = info.blocks.find(block => block.opcode === 'whenUserEntered')
      wue.isEdgeActivated = false

      return info
    }

    joinRoom(args: any, util: any): void {
      // console.log('joinRoom: ' + args.ROOM)

      // Ignored if api key was already input.
      this.inputApiKey()
      if (!this.peer) {
        return
      }

      if (!this.room) {
        if(this.isConnected){
          this.room = this.peer.joinRoom(args.ROOM, { mode: 'p2p' })

          this.room.on(
            'open',
            function () {
              console.log(args.ROOM + 'に入室しました')
              this.isEntered = true
              util.startHats('textchatskyway_whenUserEntered', {
                USER: '自分',
                ENTER: '入室'
              })
            }.bind(this)
          )

          this.room.on(
            'data',
            function (data) {
              // console.log('received:' + data.data)
              this.receivedChatText = data.data
              // this.isReceived = true
              util.startHats('textchatskyway_whenChatTextReceived')
            }.bind(this)
          )

        }else{
          console.log('接続中...')
          setTimeout( this.joinRoom.bind(this), 100, args, util);
        }
      } else {
        console.log('重複して入室はできません。一度退出してください。')
      }
    }

    leaveRoom(args, util) {
      // console.log('leaveRoom')
      if (this.room) {
        this.room.close()
        console.log('退室しました')
        this.isEntered = false
        util.startHats('textchatskyway_whenUserEntered', {
          USER: '自分',
          ENTER: '退室'
        })
        this.room = undefined
      }
    }

    whenChatTextReceived(args) {
      return
    }

    whenUserEntered(args) {
      return
    }

    getApiKey() {
      return window.prompt('SkyWayのAPIキーを入力してください: ', '')
    }
  }

  Scratch.extensions.register(new TextChatSkyWayExtensionTW())
})(Scratch)
