const AbstractNode = require('../abstract')

class MathLog2 extends AbstractNode {

  static metadata() {
    return {
      name: 'Log2',
      code: 'math/log2',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/float' 
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
      const ret = Math.log2(inputs.valA)
      this.setOutput('result', ret)
    }
  }
}

module.exports = MathLog2
