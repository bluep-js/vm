const AbstractNode = require('../abstract')

class MathTrunc extends AbstractNode {

  static metadata() {
    return {
      name: 'Trunc',
      code: 'math/trunc',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/float'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'trunc(Source)',
          type: 'basic/number'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.trunc(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathTrunc
