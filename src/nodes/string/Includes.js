const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringIncludes extends AbstractNode {

  static metadata() {
    return {
      name: 'Includes',
      code: 'string/includes',
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
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/boolean'
        }
      },
    }
  }


  async execute(inputs) {
    this.debug('execute', inputs)
    const a = inputs.income
    const b = inputs.search
    let res = false
    if (a && a.includes(b))
      res = true
    this.setOutput('result', res)
  }
}


module.exports = StringIncludes
