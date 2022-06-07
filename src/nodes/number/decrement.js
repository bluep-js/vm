const AbstractNode = require('../abstract')

class NumberDecrement extends AbstractNode {

  static metadata() {
    return {
      name: '--',
      code: 'number/decrement',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number'
        }
      },
    }
  }


  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', inputs.result - 1)
  }


}





module.exports = NumberDecrement
