const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class NumberIsInteger extends AbstractNode {

  static metadata() {
    return {
      name: 'IsInteger',
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
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/boolean'
        }
      },
      templates: {
        A: {
          allow: ['basic/number', 'basic/float']
        },
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', Number.isInteger(inputs.income))
  }
}


module.exports = NumberIsInteger
