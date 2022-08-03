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
        number: {
          code: 'number',
          name: 'Number',
          type: 'basic/float'
        },
        cut: {
          code: 'cut',
          name: 'Cut',
          type: 'basic/number'
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
    if (inputs.number) {
      const ret = inputs.number.toFixed(inputs.cut)
      this.setOutput('result', ret)
    }
  }
}

module.exports = FloatToFixed
