const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathSign extends AbstractNode {

  static metadata() {
    return {
      name: 'MathSign',
      code: 'math/mathSign',
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
          allow: ['basic/number', 'basic/float']
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.sign(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathSign
