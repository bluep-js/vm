const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathSqrt extends AbstractNode {


  static metadata() {
    return {
      name: 'MathSqrt',
      code: 'math/mathSqrt',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/template',
          template: 'NumberFloat'
        }
      },
      outputs: {
        sqrt: {
          code: 'sqrt',
          name: 'Sqrt',
          type: 'basic/float'
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number', 'basic/float']
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
