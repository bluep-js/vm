const AbstractNode = require('../abstract')

class MathAcos extends AbstractNode {

  static metadata() {
    return {
      name: 'Acos',
      code: 'math/acos',
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
          name: 'acos(source)',
          type: 'basic/float'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.acos(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathAcos
