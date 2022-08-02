const AbstractNode = require('../abstract')

class NumberMulti extends AbstractNode {

  static metadata() {
    return {
      name: 'A * B',
      code: 'number/mt',
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
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = inputs.valA * inputs.valB
    this.setOutput('result', ret)
  }
}

module.exports = NumberMulti
