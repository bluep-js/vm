const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringLength extends AbstractNode {

  static metadata() {
    return {
      name: 'Length',
      code: 'string/length',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/string'
        },
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
    if (inputs.valA) {
      const ret = inputs.valA.length
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringLength
