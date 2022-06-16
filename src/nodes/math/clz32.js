const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathClz32 extends AbstractNode {

  static metadata() {
    return {
      name: 'Clz32',
      code: 'math/clz32',
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
          type: 'basic/number'
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number', 'basic/float', 'basic/boolean']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.clz32(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathClz32
