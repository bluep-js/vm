const AbstractNode = require('../abstract')

class MathLN2 extends AbstractNode {

  static metadata() {
    return {
      name: 'Ln2',
      code: 'math/ln2',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        ln2: {
          code: 'ln2',
          name: 'Math.LN2',
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
