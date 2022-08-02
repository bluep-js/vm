const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringIndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'IndexOf',
      code: 'string/indexOf',
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
          type: 'basic/string'
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
    if (inputs.valA) {
      const ret = inputs.valA.indexOf(inputs.valB)
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringIndexOf
