const { colord } = require('colord')
const AbstractNode = require('../abstract')

class ColorToHsl extends AbstractNode {

  static metadata() {
    return {
      name: 'To HSL',
      code: 'color/tohsl',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        color: {
          code: 'color',
          name: 'Color',
          type: 'basic/color'
        }
      },
      outputs: {
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
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const c = colord(inputs.color)
    if (c.isValid()) {
      const hsl = c.toHsl()
      this.setOutput('h', hsl.h)
      this.setOutput('s', hsl.s)
      this.setOutput('l', hsl.l)
    }
  }
}

module.exports = ColorToHsl
