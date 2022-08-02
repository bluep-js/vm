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
          type: 'basic/float' 
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number'
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
