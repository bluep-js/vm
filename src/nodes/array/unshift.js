const dayjs = require('dayjs')
const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class ArrayUnshift extends AbstractNode {

  static metadata() {
    return {
      name: 'Unshift',
      code: 'array/unshift',
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
          template: 'A',
          multiple: 'A', 
        }  
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number' 
        }
      },
      templates: {
        A: {
          allow: ['*'] 
        }
      },
      multiples: {
        A: {
          value: 1,
          min: 1
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array )
    let a = inputs.array.unshift(inputs.element)
    this.setOutput('result', a)

  }
}




module.exports = ArrayUnshift