const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathE extends AbstractNode {

  static metadata() {
    return {
      name: 'E',
      code: 'math/e',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        e: {
          code: 'e',
          name: 'E',
          type: 'basic/float'
        }
      }
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.E
    this.setOutput('e', ret)
  }
}

module.exports = MathE
