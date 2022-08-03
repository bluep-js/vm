const AbstractNode = require('../abstract')

class MathFloor extends AbstractNode {

  static metadata() {
    return {
      name: 'Floor',
      code: 'math/floor',
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
          name: 'floor(Source)',
          type: 'basic/number'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.floor(inputs.base)
    this.setOutput('result', ret)
  }
}

module.exports = MathFloor
