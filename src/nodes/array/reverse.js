const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayReverse extends AbstractNode {

  static metadata() {
    return {
      name: 'Reverse',
      code: 'array/reverse',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        array: {
          code: 'array',
          name: 'Array',
          type: 'basic/template',
          template: 'A',
          isArray: true
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'A',
          isArray: true
        },
      },
      templates: {
        A: {
          allow: ['*'] // ,
          // disallow: [],
          // type: ''
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs) 
    this.setOutput('result', inputs.array.reverse())
  }   
}

module.exports = ArrayReverse
