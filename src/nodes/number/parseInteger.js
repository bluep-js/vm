const AbstractNode = require('../abstract')

class NumberParseInteger extends AbstractNode {

  static metadata() {
    return {
      name: 'Parse Integer',
      code: 'number/parseInteger',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      let ret = parseInt(inputs.valA, 10)
      this.setOutput('result', ret)
    }
  }
}

module.exports = NumberParseInteger
