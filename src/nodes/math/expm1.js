const AbstractNode = require('../abstract')

class MathExpm1 extends AbstractNode {

  static metadata() {
    return {
      name: 'Expm1',
      code: 'math/expm1',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/float'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'expm1(source)',
          type: 'basic/float'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.expm1(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathExpm1
