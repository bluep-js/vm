const dayjs = require('dayjs')
const advancedFormat = require('dayjs/plugin/advancedFormat')
const BuddhistEra = require("dayjs/plugin/buddhistEra")
const dayOfYear = require('dayjs/plugin/dayOfYear')
const QuarterOfYear = require('dayjs/plugin/quarterOfYear')
const weekOfYear = require('dayjs/plugin/weekOfYear')

dayjs.extend(advancedFormat)
dayjs.extend(BuddhistEra)
dayjs.extend(dayOfYear)
dayjs.extend(QuarterOfYear)
dayjs.extend(weekOfYear)

const AbstractNode = require('../abstract')

class DatetimeParse extends AbstractNode {

  static metadata() {
    return {
      name: 'Parse',
      code: 'datetime/parse',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        source: {
          code: 'source',
          name: 'Source',
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
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const d = dayjs(inputs.source, inputs.format)
    this.setOutput('result', d)
  }
}

module.exports = DatetimeParse
