const dayjs = require('dayjs')
const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class ArrayToString extends AbstractNode {

  static metadata() {
    return {
      name: 'Tostring',
      code: 'array/tostring',
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
        },
      },
      templates: {
        A: {
          allow: ['*'] // ,
          // disallow: [],
          // type: ''
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array)
    if (Array.isArray(inputs.array)) {
      this.setOutput('result', inputs.array.toString())
    } 
  }
}

module.exports = ArrayToString