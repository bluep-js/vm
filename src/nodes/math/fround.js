const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathFround extends AbstractNode {

  static metadata() {
    return {
      name: 'Fround',
      code: 'math/fround',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/template',
          template: 'NumberFloat'
        }
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
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.expm1(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathFround
