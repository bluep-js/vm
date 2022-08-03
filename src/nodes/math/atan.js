const AbstractNode = require('../abstract')

class MathAtan extends AbstractNode {

  static metadata() {
    return {
      name: 'Atan',
      code: 'math/atan',
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
          name: 'atan(Source)',
          type: 'basic/float'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.atan(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathAtan
