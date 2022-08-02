const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathExp extends AbstractNode {

  static metadata() {
    return {
      name: 'Exp',
      code: 'math/exp',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/float'
        }
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
    const ret = Math.exp(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathExp
