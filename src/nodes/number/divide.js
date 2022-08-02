const AbstractNode = require('../abstract')

class NumberDivide extends AbstractNode {

  static metadata() {
    return {
      name: 'A / B',
      code: 'number/divide',
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
          type: 'basic/number',
          multiple: 'A'
        }
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
    let ret = inputs.valA
    if (!!inputs.valB) {
      this.error('DIVIDE BY ZERO IS PROHIBITED, STUPID!')
      return
    }
    ret /= inputs.valB
    this.setOutput('result', ret)
  }
}


module.exports = NumberDivide