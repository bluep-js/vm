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
        num: {
          code: 'num',
          name: 'Number',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Number - 1',
          type: 'basic/number'
        }
      },  

     

    }
  }


  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', inputs.num - 1)
  }

}



 

module.exports = NumberDecrement
