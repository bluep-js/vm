const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayIncludes extends AbstractNode {

  static metadata() {
    return {
      name: 'Includes',
      code: 'array/includes',
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
        },
        element: {
          code: 'element',
          name: 'Element',
          type: 'basic/template',
          template: 'A'
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
    this.setOutput('result', inputs.array.includes(inputs.element))
  }
}

module.exports = ArrayIncludes