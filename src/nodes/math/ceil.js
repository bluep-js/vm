const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathCeil extends AbstractNode {

  static metadata() {
    return {
      name: 'Ceil',
      code: 'math/ceil',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        base: {
          code: 'base',
          name: 'Base',
          type: 'basic/template',
          template: 'NumberFloat'
        }
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
          allow: ['basic/number','basic/float']
        }
      } 
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.ceil(inputs.base)
    this.setOutput('result', ret )
  }
}

module.exports = MathCeil
