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
          type: 'basic/boolean'
        },
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
    this.debug('execute', inputs)
    if (Array.isArray(inputs.array)) {
      this.setOutput('result', inputs.array.includes(inputs.element))
    }
  }
}

module.exports = ArrayIncludes
