const AbstractNode = require('../abstract')

class MathTan extends AbstractNode {

  static metadata() {
    return {
      name: 'Tan',
      code: 'math/tan',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/float' 
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'tan(Source)',
          type: 'basic/float'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      const ret = Math.tan(inputs.valA)
      this.setOutput('result', ret)
    }
  }
}

module.exports = MathTan
