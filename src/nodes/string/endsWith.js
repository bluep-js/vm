const AbstractNode = require('../abstract')

class StringEndsWith extends AbstractNode {

  static metadata() {
    return {
      name: 'Ends With',
      code: 'string/endsWith',
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
          name: 'Template',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Is Ends With',
          type: 'basic/boolean'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const a = inputs.valA
    const b = inputs.valB
    let res = false
    if (a && a.endsWith(b))
      res = true
    this.setOutput('result', res)
  }
}


module.exports = StringEndsWith
