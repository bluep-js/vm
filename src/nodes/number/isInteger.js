const AbstractNode = require('../abstract')

class NumberIsInteger extends AbstractNode {

  static metadata() {
    return {
      name: 'Is Integer',
      code: 'number/isInteger',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        income: {
          code: 'income',
          name: 'Income',
          type: 'basic/template',
          template: 'A'
        }
      },
      outputs: {
        isInt: {
          code: 'isInt',
          name: 'Is Integer',
          type: 'basic/boolean'
        },
        result: {
          code: 'result',
          name: 'Number',
          type: 'basic/number'
        }
      },
      templates: {
        A: {
          allow: ['*']
        },
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const isInt = Number.isInteger(inputs.income)
    this.setOutput('isInt', isInt )
    if (isInt) this.setOutput('result', inputs.income)
  }
}


module.exports = NumberIsInteger
