const AbstractNode = require('../abstract')

class BooleanNot extends AbstractNode {

  static metadata() {
    return {
      name: '!A',
      code: 'boolean/not',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/boolean'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: '!A',
          type: 'basic/boolean'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', !inputs.valA)
  }
}

module.exports = BooleanNot
