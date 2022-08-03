const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const AbstractNode = require('../abstract')

class DatetimeUtc extends AbstractNode {

  static metadata() {
    return {
      name: 'Utc',
      code: 'datetime/utc',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: { 
        datetime: {
          code: 'datetime',
          name: 'Datetime',
          type: 'basic/datetime'
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'UTC',
          type: 'basic/datetime'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs) 
      const a = dayjs(inputs.datetime)
      this.setOutput('result', a.utc())   
  }
}


module.exports = DatetimeUtc
