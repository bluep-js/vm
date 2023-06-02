const AbstractNode = require('../abstract')

class ArrayPush extends AbstractNode {

  static metadata() {
    return {
      name: 'Push',
      code: 'array/push',
      type: 'execute',
      deleteable: true,
      addable: true,
      inputs: {
        call: {
          code: 'call',
          name: 'Call',
          type: 'basic/execute'
        },
        array: {
          code: 'array',
          name: 'Array',
          type: 'basic/template',
          template: 'A/array',
        },
        element: {
          code: 'element',
          name: 'Element',
          type: 'basic/template',
          template: 'A',
          // multiple: 'A',
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/execute'
        },
        resultNumber: {
          code: 'resultNumber',
          name: 'New array length',
          type: 'basic/number'
        }
      },
      templates: {
        A: {
          allow: ['*'],
          info: {
            isArray: 0,
          },
          variants: {
            array: {
              $add: {
                isArray: 1
              }
            }
          },
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
    this.debug('execute', inputs)
    if (Array.isArray(inputs.array)) {
      this.setOutput('resultNumber', inputs.array.push(inputs.element))
    }
    return 'result'
  }
}

module.exports = ArrayPush
