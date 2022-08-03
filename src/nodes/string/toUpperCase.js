const AbstractNode = require('../abstract')

class StringToUpperCase extends AbstractNode {

  static metadata() {
    return {
      name: 'To Upper Case',
      code: 'string/toUpperCase',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        income: {
          code: 'income',
          name: 'Source',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'To Upper',
          type: 'basic/string'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = typeof inputs.income === 'string'
      ? inputs.income.toUpperCase()
      : undefined
    this.setOutput('result', ret)
  }
}

module.exports = StringToUpperCase
