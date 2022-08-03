const AbstractNode = require('../abstract')

class StringCharAt extends AbstractNode {

  static metadata() {
    return {
      name: 'Char At',
      code: 'string/charAt',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/string'
        },
        valB: {
          code: 'valB',
          name: 'Position',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Char at pos',
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
