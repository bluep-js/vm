const AbstractNode = require('../abstract')

class StringIndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'Index Of',
      code: 'string/indexOf',
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
          name: 'Index Of',
          type: 'basic/number'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = undefined
    if (inputs.valA) {
      ret = inputs.valA.indexOf(inputs.valB)
    }
    this.setOutput('result', ret)
  }
}

module.exports = StringIndexOf
