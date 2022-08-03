const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class BooleanOr extends AbstractNode {

  static metadata() {
    return {
      name: 'A XOR B',
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
          type: 'basic/boolean',
          multiple: 'A'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'A XOR B',
          type: 'basic/boolean'
        }
      },
      multiples: {
        A: { value: 1 }
      }
    }
  }

  _xor(a, b) {
    return (!!a && !b) || (!a && !!b)
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = this._xor(inputs.valA, inputs.valB)
    Object.keys(inputs || {}).forEach(inp => {
      if (inp.startsWith('valB_multiple_')
        ret = this._xor(ret, inputs[inp])
    })
    this.setOutput('result', ret)
  }
}

module.exports = BooleanOr
