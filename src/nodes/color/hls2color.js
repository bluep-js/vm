const { colord } = require('colord')
const AbstractNode = require('../abstract')

class HlsToColor extends AbstractNode {

  static metadata() {
    return {
      name: 'From HSL',
      code: 'color/fromhsl',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        h: {
          code: 'h',
          name: 'Hue',
          type: 'basic/number'
        },
        s: {
          code: 's',
          name: 'Saturation',
          type: 'basic/number'
        },
        l: {
          code: 'l',
          name: 'Lightness',
          type: 'basic/number'
        }
      },
      outputs: {
        color: {
          code: 'color',
          name: 'Color',
          type: 'basic/color'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const c = colord(inputs)
    if (c.isValid()) {
      this.setOutput('color', c.toHex())
    }
  }
}

module.exports = HlsToColor
