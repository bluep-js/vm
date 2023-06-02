const AbstractNode = require('../abstract')

class ArrayReverse extends AbstractNode {

  static metadata() {
    return {
      name: 'Reverse',
      code: 'array/reverse',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        array: {
          code: 'array',
          name: 'Array',
          type: 'basic/template',
          template: 'A',
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'A',
        },
      },
      templates: {
        A: {
          allow: ['*'],
          info: {
            isArray: 1,
          },
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (Array.isArray(inputs.array)) {
      this.setOutput('result', inputs.array.reverse())
    }
  }
}

module.exports = ArrayReverse
