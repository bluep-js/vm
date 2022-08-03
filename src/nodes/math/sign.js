const AbstractNode = require('../abstract')

class MathSign extends AbstractNode {

  static metadata() {
    return {
      name: 'Sign',
      code: 'math/mathSign',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/float'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'sign(Source)',
          type: 'basic/number'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.sign(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathSign
