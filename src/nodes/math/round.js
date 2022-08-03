const AbstractNode = require('../abstract')

class MathRound extends AbstractNode {

  static metadata() {
    return {
      name: 'Round',
      code: 'math/mathRound',
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
          name: 'round(Source)',
          type: 'basic/number'
        }
      } 
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.round(inputs.base)
    this.setOutput('result', ret)
  }
}

module.exports = MathRound
