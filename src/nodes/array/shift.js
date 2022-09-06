const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayShift extends AbstractNode {

  static metadata() {
    return {
      name: 'Shift',
      code: 'array/shift',
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
          type: 'basic/string'
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
    this.debug('execute', inputs)
    this.setOutput('result', inputs.array.shift())
  }
}

module.exports = ArrayShift
 