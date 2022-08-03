const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringReplace extends AbstractNode {

  static metadata() {
    return {
      name: 'Replace',
      code: 'string/replace',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        income: {
          code: 'income',
          name: 'Income',
          type: 'basic/string'
        },
        search: {
          code: 'search',
          name: 'Search',
          type: 'basic/string'
        },
        replace: {
          code: 'replace',
          name: 'Replace',
          type: 'basic/string'
        },
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
    if (inputs.income) {
      let res = inputs.income.replace(inputs.search, inputs.replace)
      this.setOutput('result', res)
    }
  }
}

module.exports = StringReplace
