const { colord } = require('colord')
const AbstractNode = require('../abstract')

class ColorToRgb extends AbstractNode {

  static metadata() {
    return {
      name: 'To RGB',
      code: 'color/torgb',
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
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const c = colord(inputs.color)
    if (c.isValid()) {
      const rgb = c.toRgb()
      this.setOutput('r', rgb.r)
      this.setOutput('g', rgb.g)
      this.setOutput('b', rgb.b)
    }
  }
}

module.exports = ColorToRgb
