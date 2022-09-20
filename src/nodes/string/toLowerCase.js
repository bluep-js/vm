const AbstractNode = require('../abstract')

class StringToLowerCase extends AbstractNode {

  static metadata() {
    return {
      name: 'To Lower Case',
      code: 'string/toLowerCase',
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
          name: 'To Lower',
          type: 'basic/string'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = typeof inputs.income === 'string'
      ? inputs.income.toLowerCase()
      : undefined
    this.setOutput('result', ret)

  }
}

module.exports = StringToLowerCase
