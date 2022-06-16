const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathLN2 extends AbstractNode {

  static metadata() {
    return {
      name: 'Ln10',
      code: 'math/ln10',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        ln10: {
          code: 'ln2',
          name: 'Ln2',
          type: 'basic/float'
        }
      },
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.LN2
    this.setOutput('ln2', ret)
  }
}

module.exports = MathLN2
