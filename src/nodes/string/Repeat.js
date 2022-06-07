const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringRepeat extends AbstractNode {

  static metadata() {
    return {
      name: 'Repeat',
      code: 'string/Repeat',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/string'
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
          type: 'basic/string'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      const ret = inputs.valA.repeat(inputs.valB)
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringRepeat
