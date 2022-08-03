const AbstractNode = require('../abstract')

class StringLastIndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'LastIndexOf',
      code: 'string/lastIndexOf',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/string'
        },
        valB: {
          code: 'valB',
          name: 'Search',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Last Index Of',
          type: 'basic/number'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.valA) {
      const ret = inputs.valA.lastIndexOf(inputs.valB)
      this.setOutput('result', ret)
    }
  }
}

module.exports = StringLastIndexOf
