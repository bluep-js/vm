const AbstractNode = require('../abstract')

class ArraySplice extends AbstractNode {

  static metadata() {
    return {
      name: 'Splice',
      code: 'array/splice',
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
          template: 'A',
          isArray: true
        },
        start: {
          code: 'start',
          name: 'Start',
          type: 'basic/number'
        },
        deleteCount: {
          code: 'deleteCount',
          name: 'delete count',
          type: 'basic/number'
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
          allow: ['*']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (Array.isArray(inputs.array)) {
      this.setOutput('resultNumber', inputs.array.splice(inputs.start && inputs.deleteCount))
    }
    return 'result'
  }
}

module.exports = ArraySplice