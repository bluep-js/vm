const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayPop extends AbstractNode {

  static metadata() {
    return {
      name: 'Pop',
      code: 'array/pop',
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
          template: 'A' 
        } 
      },
      templates: {
        A: {
          allow: ['*']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array)
    if (inputs.array) {
      let res = inputs.array.pop()
      this.setOutput('result', res)
    }
  }
}

module.exports = ArrayPop
 