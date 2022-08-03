const AbstractNode = require('../abstract')

class MathSqrt2 extends AbstractNode {

  static metadata() {
    return {
      name: 'SQRT2',
      code: 'math/sqrt2',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        sqrt2: {
          code: 'sqrt2',
          name: 'Math.SQRT2',
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
