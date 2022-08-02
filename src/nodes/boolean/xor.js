const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class BooleanOr extends AbstractNode {

  static metadata() {
    return {
      name: 'A ^ B',
      code: 'boolean/xor',
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
          type: 'basic/boolean'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/boolean'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = (!!inputs.valA && !inputs.valB) || (!inputs.valA && !!inputs.valB)
    this.setOutput('result', ret)
  }
}

module.exports = BooleanOr
