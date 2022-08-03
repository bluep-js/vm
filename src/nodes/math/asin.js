const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathAsin extends AbstractNode {

  static metadata() {
    return {
      name: 'Asin',
      code: 'math/asin',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/float'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/float'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.asin(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathAsin
