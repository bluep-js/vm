const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringToLowerCase extends AbstractNode {

  static metadata() {
    return {
      name: 'toLowerCase',
      code: 'string/toLowerCase',
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
      const ret = inputs.income.toLowerCase()
      this.setOutput('result', ret)
    }
  }
} 

module.exports = StringToLowerCase
  