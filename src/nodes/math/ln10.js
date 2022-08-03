const AbstractNode = require('../abstract')

class MathLN10 extends AbstractNode {

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
          code: 'ln10',
          name: 'Math.LN10',
          type: 'basic/float'
        }
      },
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.LN10
    this.setOutput('ln10', ret)
  }
}

module.exports = MathLN10
