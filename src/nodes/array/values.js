const dayjs = require('dayjs')
const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class ArrayValues extends AbstractNode {

  static metadata() {
    return {
      name: 'Values',
      code: 'array/values',
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
          allow: ['*'] // ,
          // disallow: [],
          // type: ''
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array)
    if (Array.isArray(inputs.array)) {
      const result =  inputs.array.valueOf();
      this.setOutput('result', result)
    } 
  }
}

module.exports = ArrayValues