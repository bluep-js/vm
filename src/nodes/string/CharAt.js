const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringCharAt extends AbstractNode {

  static metadata() {
    return {
      name: 'CharAt',
      code: 'string/charAt',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/string'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/string'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      const ret = inputs.valA.charAt(inputs.valB)
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringCharAt
