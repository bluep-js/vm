const AbstractNode = require('../abstract')

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
          name: 'Source',
          type: 'basic/string'
        },
        valA: {
          code: 'valA',
          name: 'From',
          type: 'basic/number'
        },
        valB: {
          code: 'valB',
          name: 'To',
          type: 'basic/number'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Slice',
          type: 'basic/string'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = typeof inputs.income === 'string'
      ? inputs.income.slice(inputs.valA, inputs.valB)
      : undefined
    this.setOutput('result', ret)
  }
}

module.exports = StringSlice
