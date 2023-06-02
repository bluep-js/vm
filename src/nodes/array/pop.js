const AbstractNode = require('../abstract')

class ArrayPop extends AbstractNode {

  static metadata() {
    return {
      name: 'Pop',
      code: 'array/pop',
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
    this.debug('execute', inputs.array)
    if (Array.isArray(inputs.array)) {
      this.setOutput('returned', inputs.array.pop(inputs.array))
    }
    return 'result'
  }
}

module.exports = ArrayPop
