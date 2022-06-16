const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class FloatParse extends AbstractNode {

  static metadata() {
    return {
      name: 'Parse',
      code: 'float/floatParse',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
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
    if (inputs.valA) {
      let ret = parseFloat(inputs.valA)
      this.setOutput('result', ret)
    }
  }
}

module.exports = FloatParse
