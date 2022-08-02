const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathSqrt2 extends AbstractNode {

  static metadata() {
    return {
      name: 'MathSqrt2',
      code: 'math/mathSqrt2',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        sqrt2: {
          code: 'sqrt2',
          name: 'Sqrt2',
          type: 'basic/float'
        }
      }
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.SQRT2
    this.setOutput('sqrt2', ret)
  }
}


module.exports = MathSqrt2
