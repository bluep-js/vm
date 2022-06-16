const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathTrunc extends AbstractNode {

  static metadata() {
    return {
      name: 'MathTrunc',
      code: 'math/MathTrunc',
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
