const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringSlice extends AbstractNode {

  static metadata() {
    return {
      name: 'Slice',
      code: 'string/slice',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        income: {
          code: 'income',
          name: 'Income',
          type: 'basic/string'
        },
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/number'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/number'
        },
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
    if (inputs.income) {
      const ret = inputs.income.slice(inputs.valA, inputs.valB)
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringSlice
