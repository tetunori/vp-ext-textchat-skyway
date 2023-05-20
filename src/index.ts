import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import Cast from 'scratch-vm/src/util/cast'

class GamepadExtension {
  private runtime: Runtime

  private gamepadIndex: number

  constructor(runtime: Runtime) {
    this.runtime = runtime

    this.gamepadIndex = null

    window.addEventListener('gamepadconnected', event => {
      // console.log('Gamepad has been connected')
      this.gamepadIndex = event.gamepad.index
    })
    window.addEventListener('gamepaddisconnected', () => {
      // console.log('Gamepad has been disconnected')
      this.gamepadIndex = null
    })
  }

  getInfo() {
    return {
      id: 'gamepad',
      name: 'Gamepad',
      menuIconURI: 'assets/images/menuIcon.png',
      blockIconURI: 'assets/images/menuIcon.png',
      color1: '#a0a0a0',
      color2: '#808080',
      color3: '#606060',

      blocks: [
        {
          opcode: 'getAxes',
          blockType: BlockType.REPORTER,
          text: '[AXIS] value for [STICK] stick',
          arguments: {
            AXIS: {
              type: ArgumentType.NUMBER,
              menu: 'axes',
              defaultValue: '0'
            },
            STICK: {
              type: ArgumentType.NUMBER,
              menu: 'sticks',
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'whenButtonPressed',
          blockType: BlockType.HAT,
          text: 'when [BUTTON] button pressed',
          arguments: {
            BUTTON: {
              type: ArgumentType.NUMBER,
              menu: 'buttons',
              defaultValue: '12'
            }
          }
        },
        {
          opcode: 'isButtonPressed',
          blockType: BlockType.BOOLEAN,
          text: '[BUTTON] button pressed?',
          arguments: {
            BUTTON: {
              type: ArgumentType.NUMBER,
              menu: 'buttons',
              defaultValue: '12'
            }
          },
          func: 'whenButtonPressed'
        }
      ],

      menus: {
        sticks: {
          acceptReporters: true,
          items: [
            {
              text: 'left',
              value: '0'
            },
            {
              text: 'right',
              value: '1'
            }
          ]
        },
        axes: {
          acceptReporters: true,
          items: [
            {
              text: 'X',
              value: '0'
            },
            {
              text: 'Y',
              value: '1'
            }
          ]
        },
        buttons: {
          acceptReporters: true,
          items: [
            {
              text: 'up',
              value: '12'
            },
            {
              text: 'down',
              value: '13'
            },
            {
              text: 'right',
              value: '15'
            },
            {
              text: 'left',
              value: '14'
            },
            {
              text: 'cross',
              value: '0'
            },
            {
              text: 'circle',
              value: '1'
            },
            {
              text: 'square',
              value: '2'
            },
            {
              text: 'triangle',
              value: '3'
            },
            {
              text: 'left stick',
              value: '10'
            },
            {
              text: 'right stick',
              value: '11'
            },
            {
              text: 'left shoulder',
              value: '4'
            },
            {
              text: 'right shoulder',
              value: '5'
            },
            {
              text: 'left trigger',
              value: '6'
            },
            {
              text: 'right trigger',
              value: '7'
            },
            {
              text: 'share',
              value: '8'
            },
            {
              text: 'options',
              value: '9'
            },
            {
              text: 'touch pad',
              value: '17'
            },
            {
              text: 'PS',
              value: '16'
            }
          ]
        }
      }
    }
  }

  getAxes(args) {
    if (this.gamepadIndex === null) {
      return false
    }

    const gamepad = navigator.getGamepads()[this.gamepadIndex]
    if (!gamepad) {
      return false
    }

    const stickIndex = Cast.toNumber(args.STICK)
    const axisIndex = Cast.toNumber(args.AXIS)
    const sign = axisIndex === 0 ? 1 : -1

    return gamepad.axes[stickIndex * 2 + axisIndex] * sign
  }

  whenButtonPressed(args) {
    if (this.gamepadIndex === null) {
      return false
    }

    const gamepad = navigator.getGamepads()[this.gamepadIndex]
    if (!gamepad) {
      return false
    }

    const buttonIndex = Cast.toNumber(args.BUTTON)
    return gamepad.buttons[buttonIndex].pressed
  }
}

export default GamepadExtension
