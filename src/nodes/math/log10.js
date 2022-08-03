const AbstractNode = require('../abstract')

class MathLog10 extends AbstractNode {

  static metadata() {
    return {
      name: 'Log10',
      code: 'math/log10',
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
          name: 'log10(Source)',
          type: 'basic/float' 
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.log10(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathLog10
