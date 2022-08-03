const AbstractNode = require('../abstract')

class MathSqrt extends AbstractNode {

  static metadata() {
    return {
      name: 'Sqrt',
      code: 'math/sqrt',
      type: 'getter',
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
        sqrt: {
          code: 'sqrt',
          name: 'sqrt(Source)',
          type: 'basic/float'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute')
    const ret = Math.sqrt(inputs.valA)
    this.setOutput('sqrt', ret)
  }
}


module.exports = MathSqrt
