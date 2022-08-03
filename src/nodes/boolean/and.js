const AbstractNode = require('../abstract')

class BooleanAnd extends AbstractNode {

  static metadata() {
    return {
      name: 'A && B',
      code: 'boolean/and',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/boolean'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/boolean',
          multiple: 'A'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'A && B',
          type: 'basic/boolean'
        }
      },
      multiples: {
        A: { value: 1 }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = !!Object.keys(inputs).length
    Object.keys(inputs || {}).forEach(inp => {
      ret = ret && !!inputs[inp]
    })
    this.setOutput('result', ret)
  }
}

module.exports = BooleanAnd
