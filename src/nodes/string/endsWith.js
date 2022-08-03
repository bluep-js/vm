const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringEndsWith extends AbstractNode {

  static metadata() {
    return {
      name: 'EndsWith',
      code: 'string/endsWith',
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
