const AbstractNode = require('../abstract')

class FloatIsGreater extends AbstractNode {

  static metadata() {
    return {
      name: 'A > B',
      code: 'float/gt',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        numberA: {
          code: 'numberA',
          name: 'A',
          type: 'basic/float'
        },
        numberB: {
          code: 'numberB',
          name: 'B',
          type: 'basic/float'
        },
        equal: {
          code: 'equal',
          name: 'Can be equal',
          type: 'basic/boolean'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'A > B',
          type: 'basic/boolean'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const a = inputs.numberA
    const b = inputs.numberB
    const eq = inputs.equal
    let res = false
    if (a > b || (eq && a === b))
      res = true
    this.setOutput('result', res)
  }
}

module.exports = FloatIsGreater
