const AbstractNode = require('../abstract')

class ArraySlice extends AbstractNode {

  static metadata() {
    return {
      name: 'Slice',
      code: 'array/slice',
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
        valA: {
          code: 'valA',
          name: 'Start',
          type: 'basic/number'
        },
        valB: {
          code: 'valB',
          name: 'End',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'A',
          isArray: true
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
    this.debug('execute', inputs.valA, inputs.valB)
    if (Array.isArray(inputs.array)) {
      this.setOutput('result', inputs.array.slice(inputs.valA, inputs.valB))
    }
  }
}

module.exports = ArraySlice