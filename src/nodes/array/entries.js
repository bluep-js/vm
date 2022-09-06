const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class ArrayEntries extends AbstractNode {

  static metadata() {
    return {
      name: 'Entries',
      code: 'array/entries',
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
      const res = inputs.array.entries()
      for (let element of res) {
        console.log(element);
      }
      this.setOutput('result', res)
    } 
  }
}

module.exports = ArrayEntries