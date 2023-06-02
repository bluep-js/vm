const AbstractNode = require('../abstract')

class ArrayIsArray extends AbstractNode {

  static metadata() {
    return {
      name: 'Is Array',
      code: 'array/isArray',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        array: {
          code: 'array',
          name: 'Array',
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
          info: {
            isArray: 0,
            canBeArray: true
          }
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', Array.isArray(inputs.array))
  }
}

module.exports = ArrayIsArray
