const AbstractNode = require('../abstract')

class FloatToFixed extends AbstractNode {

  static metadata() {
    return {
      name: 'To Fixed',
      code: 'float/toFixed',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        number: {
          code: 'number',
          name: 'Float',
          type: 'basic/float'
        },
        cut: {
          code: 'cut',
          name: 'Cut',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/float'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = undefined
    if (typeof inputs.number !== 'undefined' && typeof inputs.number.toFixed === 'function') {
      ret = inputs.number.toFixed(inputs.cut)
    }
    this.setOutput('result', ret)
  }
}

module.exports = FloatToFixed
