const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathAbs extends AbstractNode {

  static metadata() {
    return {
      name: 'MathAbs',
      code: 'math/MathAbs',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/float'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number'
        }
      }, 
    }
  }

   async execute(inputs) {
      this.debug('execute', inputs)
      if (inputs.valA) {
      const ret = Math.abs(inputs.valA)
      this.setOutput('result', ret )
    }
  }
}

module.exports = MathAbs
