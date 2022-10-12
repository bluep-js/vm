const { colord } = require('colord')
const AbstractNode = require('../abstract')

class RgbToColor extends AbstractNode {

  static metadata() {
    return {
      name: 'From RGB',
      code: 'color/fromrgb',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        r: {
          code: 'r',
          name: 'Red',
          type: 'basic/number'
        },
        g: {
          code: 'g',
          name: 'Green',
          type: 'basic/number'
        },
        b: {
          code: 'b',
          name: 'Blue',
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

module.exports = RgbToColor
