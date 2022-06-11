const AbstractNode = require('../abstract')

class NumberAssign extends AbstractNode {

  static metadata() {
    return {
      name: 'A = B',
      code: 'number/assign',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/number'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/number'
        }
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
    this.setOutput('result', inputs.valA = inputs.valB)
  }
}

module.exports = NumberAssign
