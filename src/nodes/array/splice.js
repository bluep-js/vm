const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArraySplice extends AbstractNode {

  static metadata() {
    return {
      name: 'Splice',
      code: 'array/splice',
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
        start: {
          code: 'start',
          name: 'Start',
          type: 'basic/number'
        }, 
        item: {
          code: 'item',
          name: 'Item',
          type: 'basic/template',
          template: 'A',
        }, 
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
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs )
    this.setOutput('result', inputs.array.splice(inputs.start, inputs.item))
  }
}

module.exports = ArraySplice
 