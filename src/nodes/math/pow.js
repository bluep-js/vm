const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathPow extends AbstractNode {

  static metadata() {
    return {
      name: 'MathPow',
      code: 'math/MathPow',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        base: {
          code: 'base',
          name: 'Base',
          type: 'basic/float'
        },
        exponent: {
          code: 'exponent',
          name: 'Exponent',
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
    const ret = Math.pow(inputs.base, inputs.exponent)
    this.setOutput('result', ret)
  }
}

module.exports = MathPow
