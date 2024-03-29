const AbstractNode = require('../abstract')

class MathRandom extends AbstractNode {

  static metadata() {
    return {
      name: 'MathRandom',
      code: 'math/MathRandom',
      type: 'getter',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        random: {
          code: 'random',
          name: 'Random',
          type: 'basic/float' 
        }
      }
    }
  }

  async execute() {
    this.debug('execute')
    const ret = Math.random()
    this.setOutput('random', ret)
  }
}

module.exports = MathRandom
