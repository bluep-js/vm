const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathLog extends AbstractNode {

  static metadata() {
    return {
      name: 'Log',
      code: 'math/log',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/float', 
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/float' 
        }
      } 
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      const ret = Math.log(inputs.valA)
      this.setOutput('result', ret)
    }
  }
}

module.exports = MathLog
