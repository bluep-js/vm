const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathCos extends AbstractNode {

  static metadata() {
    return {
      name: 'Cos',
      code: 'math/cos',
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
    const ret = Math.cos(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathCos
