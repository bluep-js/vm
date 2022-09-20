const AbstractNode = require('../abstract')

class ArrayJoin extends AbstractNode {

  static metadata() {
    return {
      name: 'Join',
      code: 'array/join',
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
        separator: {
          code: 'separator',
          name: 'Separator',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/string',
        },
      },
      templates: {
        A: {
          allow: ['*']
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array, inputs.separator)
    if (Array.isArray(inputs.array)) {
      const res = inputs.array.join(inputs.separator)
      this.setOutput('result', res)
    }

  }
}

module.exports = ArrayJoin