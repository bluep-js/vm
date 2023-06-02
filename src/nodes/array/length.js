const AbstractNode = require('../abstract')

class ArrayLength extends AbstractNode {

  static metadata() {
    return {
      name: 'Length',
      code: 'array/length',
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
          type: 'basic/number'
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
      const a = inputs.array
      this.setOutput('result', a.length)
    }
  }
}

module.exports = ArrayLength
