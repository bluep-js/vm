const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayCopyWithin extends AbstractNode {

  static metadata() {
    return {
      name: 'CopyWithin',
      code: 'array/copywithin',
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
        target: {
          code: 'target',
          name: 'Target',
          type: 'basic/number' 
        },
        start: {
          code: 'start',
          name: 'Start',
          type: 'basic/number', 
        },  
        end: {
          code: 'end',
          name: 'End',
          type: 'basic/number' 
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/string',
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
      const res = inputs.array.copyWithin(inputs.target, inputs.start, inputs.end)
      this.setOutput('result', res)
    } 
  }
}

module.exports = ArrayCopyWithin