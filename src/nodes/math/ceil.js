const AbstractNode = require('../abstract')

class MathCeil extends AbstractNode {

  static metadata() {
    return {
      name: 'Ceil',
      code: 'math/ceil',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        base: {
          code: 'base',
          name: 'Source',
          type: 'basic/float' 
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'ceil(Source)',
          type: 'basic/number'
        }
      } 
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.ceil(inputs.base)
    this.setOutput('result', ret )
  }
}

module.exports = MathCeil
