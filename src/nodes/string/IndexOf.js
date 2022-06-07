const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class IndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'IndexOf',
      code: 'string/IndexOf',
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
          type: 'basic/string'
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

module.exports = IndexOf
