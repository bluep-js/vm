const dayjs = require('dayjs')
const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

const buddhistEra = require("dayjs/plugin/buddhistEra")
dayjs.extend(buddhistEra)

const dayOfYear  = require('dayjs/plugin/dayOfYear')
dayjs.extend(dayOfYear)

const quarterOfYear = require('dayjs/plugin/quarterOfYear') 
dayjs.extend(quarterOfYear)

const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)



const AbstractNode = require('../abstract')

class DatetimeToString extends AbstractNode {

  static metadata() {
    return {
      name: 'To String',
      code: 'datetime/tostring',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        datetime: {
          code: 'datetime',
          name: 'Datetime',
          type: 'basic/datetime'
        },
        format: {
          code: 'format',
          name: 'Format',
          type: 'basic/string',
          value: 'YYYY-MM-DDTHH:mm:ss'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/string'
        },
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const d = dayjs(inputs.datetime)
    const ret = d.format(inputs.format)
    this.setOutput('result', ret)
  }
}

module.exports = DatetimeToString
