const AbstractNode = require('../abstract')

class FloatMultiply extends AbstractNode {

  static metadata() {
    return {
      name: 'A * B',
      code: 'float/multiply',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/float'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/float',
          multiple: 'A'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'A * B',
          type: 'basic/float'
        }
      },
      multiples: {
        A: {
          value: 1,
          min: 1
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = inputs.valA
    Object.keys(inputs).forEach(inp => {
      if (inp.startsWith('valB')) ret *= inputs[inp]
    })
    this.setOutput('result', ret)
  }
}

module.exports = FloatMultiply
