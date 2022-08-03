const AbstractNode = require('../abstract')

class MathSin extends AbstractNode {

  static metadata() {
    return {
      name: 'Sin',
      code: 'math/sin',
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
          name: 'sin(Source)',
          type: 'basic/float' 
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.sin(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathSin
