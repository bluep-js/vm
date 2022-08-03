const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringToUpperCase extends AbstractNode {

  static metadata() {
    return {
      name: 'toUpperCase',
      code: 'string/toUpperCase',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        income: {
          code: 'income',
          name: 'Income',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/string'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.income) {
      const ret = inputs.income.toUpperCase()
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringToUpperCase
