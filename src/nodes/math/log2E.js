const AbstractNode = require('../abstract')

class MathLog2E extends AbstractNode {

  static metadata() {
    return {
      name: 'Math2e',
      code: 'math/log2E',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        math2e: {
          code: 'math2e',
          name: 'Math.LOG2E',
          type: 'basic/float'
        }
      }
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.LOG2E
    this.setOutput('math2e', ret)
  }
}

module.exports = MathLog2E
