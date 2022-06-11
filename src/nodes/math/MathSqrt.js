const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathSqrt extends AbstractNode {

  static metadata() {
    return {
      name: 'MathSqrt',
      code: 'math/MathSqrt',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/float'
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number','basic/float']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.SQRT2
    this.setOutput('result', ret )
  }
}

module.exports = MathSqrt
