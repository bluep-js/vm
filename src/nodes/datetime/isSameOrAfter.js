const dayjs = require('dayjs')
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter")
dayjs.extend(isSameOrAfter)


const AbstractNode = require('../abstract')

class DatetimeIsSameOrAfter extends AbstractNode {

  static metadata() {
    return {
      name: 'IsSameOrAfter',
      code: 'datetime/isSameOrAfter',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        datetime: {
          code: 'datetime',
          name: 'Datetime',
          type: 'basic/datetime'
        },
        valA: {
          code: 'valA',
          name: 'ValA',
          type: 'basic/datetime'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/boolean'
        }
      }
    }
  }
   async execute(inputs) {
    this.debug('execute', inputs)
    const a = dayjs(inputs.datetime)
    this.setOutput('result', a.isSameOrAfter(inputs.valA))
  }  
}

 
module.exports = DatetimeIsSameOrAfter
