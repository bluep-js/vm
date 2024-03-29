const AbstractNode = require('../abstract')

class MathSqrt1_2 extends AbstractNode {

  static metadata() {
    return {
      name: 'SQRT1_2',
      code: 'math/sqrt1_2',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        sqrt1_2: {
          code: 'sqrt1_2',
          name: 'Math.SQRT1_2',
          type: 'basic/float'
        }
      }
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.SQRT1_2
    this.setOutput('sqrt1_2', ret)
  }
}


module.exports = MathSqrt1_2
