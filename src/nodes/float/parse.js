const AbstractNode = require('../abstract')

class FloatParse extends AbstractNode {

  static metadata() {
    return {
      name: 'Parse Float',
      code: 'float/floatParse',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/string'
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
    let ret = parseFloat(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = FloatParse
