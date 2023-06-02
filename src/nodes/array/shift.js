const AbstractNode = require('../abstract')

class ArrayShift extends AbstractNode {

  static metadata() {
    return {
      name: 'Shift',
      code: 'array/shift',
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
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/execute'
        },
        returned: {
          code: 'returned',
          name: 'Returned',
          type: 'basic/template',
          template: 'A'
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
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (Array.isArray(inputs.array)) {
      this.setOutput('returned', inputs.array.shift(inputs.array))
    }
    return 'result'
  }
}


module.exports = ArrayShift
