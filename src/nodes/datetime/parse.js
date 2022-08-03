const dayjs = require('dayjs')
const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

const BuddhistEra = require("dayjs/plugin/buddhistEra")
dayjs.extend(BuddhistEra)

const dayOfYear = require('dayjs/plugin/dayOfYear')
dayjs.extend(dayOfYear)

const QuarterOfYear = require('dayjs/plugin/quarterOfYear')
dayjs.extend(QuarterOfYear)

var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)




const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class DatetimeParse extends AbstractNode {

  static metadata() {
    return {
      name: 'Parse',
      code: 'datetime/parse',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        datetime: {
          code: 'result',
          name: 'Result',
          type: 'basic/string'
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
          code: 'datetime',
          name: 'Datetime',
          type: 'basic/datetime'
        },

      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const d = dayjs(inputs.datetime, inputs.format)
    this.setOutput('result', d)
  }
}

module.exports = DatetimeParse
