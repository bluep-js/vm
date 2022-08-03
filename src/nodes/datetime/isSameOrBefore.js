const dayjs = require('dayjs')
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore")
dayjs.extend(isSameOrBefore)


const AbstractNode = require('../abstract')

class DatetimeIsSameOrBefore extends AbstractNode {

  static metadata() {
    return {
      name: 'IsSameOrBefore',
      code: 'datetime/isSameOrBefore',
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
    this.setOutput('result', a.isSameOrBefore(inputs.valA))
  }  
}

 
 
module.exports = DatetimeIsSameOrBefore
