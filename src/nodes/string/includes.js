const AbstractNode = require('../abstract')

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
          name: 'Source',
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
          name: 'Is Includes',
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
