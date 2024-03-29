const AbstractNode = require('../abstract')

class MathAbs extends AbstractNode {

  static metadata() {
    return {
      name: 'Abs',
      code: 'math/abs',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/template',
          template: 'NumberFloat'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'abs(Source)',
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
    if (inputs.valA) {
      const ret = Math.abs(inputs.valA)
      this.setOutput('result', ret)
    }
  }
}

module.exports = MathAbs
