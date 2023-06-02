const AbstractNode = require('../abstract')

class ColorEq extends AbstractNode {

  static metadata() {
    return {
      name: 'A === B',
      code: 'color/eq',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/color'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/color'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'A === B',
          type: 'basic/boolean'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', inputs.valA === inputs.valB)
  }
}

module.exports = ColorEq
