const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayLastIndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'LastIndexOf',
      code: 'array/lastIndexOf',
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
        fromElement: {
          code: 'fromElement',
          name: 'Element',
          type: 'basic/number'
        },
        fromIndex: {
          code: 'fromindex',
          name: 'Index',
          type: 'basic/string'
        } 
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number' 
        },
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
    if (Array.isArray(inputs.array)) {
      const res = inputs.array.lastIndexOf(inputs.fromElement || inputs.fromIndex);
      this.setOutput('result', res)
    } 
  }
}

module.exports = ArrayLastIndexOf