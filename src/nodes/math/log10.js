const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathLog10 extends AbstractNode {

  static metadata() {
    return {
      name: 'Log10',
      code: 'math/log10',
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
    if (inputs.valA) {
      const ret = Math.log10(inputs.valA)
      this.setOutput('result', ret)
    }
  }
}

module.exports = MathLog10
