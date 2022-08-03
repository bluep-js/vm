const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class FloatDivide extends AbstractNode {

  static metadata() {
    return {
      name: 'A. / B.',
      code: 'float/divide',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/float',
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/float'
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
    if (!!inputs.valB) {
      this.error('DIVIDE BY ZERO IS PROHIBITED, STUPID!')
    }
    let ret = inputs.valA / inputs.valB
    this.setOutput('result', ret)
  }
}

module.exports = FloatDivide
