const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayFilter extends AbstractNode {

  static metadata() {
    return {
      name: 'Filter',
      code: 'array/filter',
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
          type: 'basic/number'
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
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array)
    if (Array.isArray(inputs.array)) {
      const result =  inputs.array.filter(word => word.length > inputs.element);
      this.setOutput('result', result)
    } 
  }
}

module.exports = ArrayFilter