const dayjs = require('dayjs')
const isYesterday = require('dayjs/plugin/isYesterday')
const isTomorrow = require('dayjs/plugin/isTomorrow')
const isToday = require('dayjs/plugin/isToday')
const isLeapYear = require("dayjs/plugin/isLeapYear")

dayjs.extend(isYesterday)
dayjs.extend(isTomorrow)
dayjs.extend(isToday)
dayjs.extend(isLeapYear)

const AbstractNode = require('../abstract')

class DatetimeUnwrapBoolean extends AbstractNode {

  static metadata() {
    return {
      name: 'Unwrap Boolean',
      code: 'datetime/unwrapBoolean',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        datetime: {
          code: 'datetime',
          name: 'Datetime',
          type: 'basic/datetime'
        }
      },
      outputs: {
        isTomorrow: {
          code: 'isTomorrow',
          name: 'Is Tomorrow',
          type: 'basic/boolean'
        },
        isToday: {
          code: 'isToday',
          name: 'Is Today',
          type: 'basic/boolean'
        },
        isYesterday: {
          code: 'isYesterday',
          name: 'Is Yesterday',
          type: 'basic/boolean'
        },
        isLeapYear: {
          code: 'isLeapYear',
          name: 'Is leap year',
          type: 'basic/boolean'
        },
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const d = dayjs(inputs.datetime)
    this.setOutput('isYesterday', d.isYesterday())
    this.setOutput('isTomorrow', d.isTomorrow())
    this.setOutput('isToday', d.isToday())
    this.setOutput('isLeapYear', d.isLeapYear())
  }
}

module.exports = DatetimeUnwrapBoolean
