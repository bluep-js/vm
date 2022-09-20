const AbstractNode = require('../abstract')

class ArrayAt extends AbstractNode {

  static metadata() {
    return {
      name: 'At',
      code: 'array/at',
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
        index: {
          code: 'index',
          name: 'Index',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'A'
        },
      },
      templates: {
        A: {
          allow: ['*'] 
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (Array.isArray(inputs.array)) {
      let res = inputs.array.at(inputs.index)
      this.setOutput('result', res)
    }

  }
}

module.exports = ArrayAt