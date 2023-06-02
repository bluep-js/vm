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
          template: 'A/array'
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
          type: 'basic/number'
        }
      },
      templates: {
        A: {
          allow: ['*'],
          variants: {
            array: {
              $add: {
                isArray: 1
              }
            }
          },
          info: {
            isArray: 0
          }
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array)
    if (Array.isArray(inputs.array)) {
      let a = inputs.array.indexOf(inputs.element)
      this.setOutput('result', a)
    }
  }
}

module.exports = ArrayIndexOf
