const AbstractNode = require('../abstract')

class NumberIncrement extends AbstractNode {

  static metadata() {
    return {
      name: '++',
      code: 'number/increment',
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
    this.setOutput('result', inputs.result+1)
  }


}



 

module.exports = NumberIncrement
