const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayIsArray extends AbstractNode {

  static metadata() {
    return {
      name: 'IsArray',
      code: 'array/isArray',
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
          type: 'basic/boolean'
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
    this.setOutput('result', Array.isArray(inputs.array))
  }
}

module.exports = ArrayIsArray
