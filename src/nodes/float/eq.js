const AbstractNode = require('../abstract')

class FloatEq extends AbstractNode {

  static metadata() {
    return {
      name: 'A === B',
      code: 'float/eq',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/float'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/float'
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

module.exports = FloatEq
