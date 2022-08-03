const AbstractNode = require('../abstract')

class MathCbrt extends AbstractNode {

  static metadata() {
    return {
      name: 'Cbrt',
      code: 'math/cbrt',
      type: 'modifier',
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
        result: {
          code: 'result',
          name: 'cbrt(Source)',
          type: 'basic/float'
        } 
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.cbrt(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathCbrt
