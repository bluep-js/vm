const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathSin extends AbstractNode {

  static metadata() {
    return {
      name: 'MathSin',
      code: 'math/mathSin',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/template',
          template: 'NumberFloat'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'NumberFloat'
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number', 'basic/float']
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.sin(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathSin
