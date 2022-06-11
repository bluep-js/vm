const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathPi extends AbstractNode {

  static metadata() {
    return {
      name: 'MathPi',
      code: 'math/MathPi',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {},
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/float'
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number','basic/float']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.PI
    this.setOutput('result',   ret )
  }
}

module.exports = MathPi
