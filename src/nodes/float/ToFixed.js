const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class FloatToFixed extends AbstractNode {

  static metadata() {
    return {
      name: 'toFixed',
      code: 'float/toFixed',
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
          name: 'Result',
          type: 'basic/float'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      const ret = inputs.valA.toFixed(inputs.valB)
      this.setOutput('result', ret)
    }
  }
}

module.exports = FloatToFixed
