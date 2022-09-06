const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayIndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'IndexOf',
      code: 'array/indexOf',
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
          type: 'basic/string' 
        },
        index: {
          code: 'index',
          name: 'Index',
          type: 'basic/number' 
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
    this.debug('execute', inputs.array )
    let a = inputs.array.indexOf(inputs.element, inputs.index)
    this.setOutput('result', a)
  }  

}

module.exports = ArrayIndexOf
 