const dayjs = require('dayjs')
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
          allow: ['*'] // ,
          // disallow: [],
          // type: ''
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


/* 
function FuncName(param1, param2) {
  // body, where param1 and param2 exists

  return param1 > param2 // something what function return as result of work
}

const/let/var FuncName = (param1, param2) => {
  // body
  return param1 > param2
}

clv FuncName = (param1, param2) => param1 > param2

clv FuncName = param1 => param1 > 10


const/let/var funcResult = FuncName(1,2) */