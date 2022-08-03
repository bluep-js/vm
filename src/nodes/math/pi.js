const AbstractNode = require('../abstract')

class MathPi extends AbstractNode {

  static metadata() {
    return {
      name: 'Pi',
      code: 'math/pi',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        pi: {
          code: 'pi',
          name: 'Math.PI',
          type: 'basic/float'
        }
      }
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.PI
    this.setOutput('pi', ret)
  }
}

module.exports = MathPi
