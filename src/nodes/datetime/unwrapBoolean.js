const dayjs = require('dayjs')
const toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)

const isYesterday = require('dayjs/plugin/isYesterday')
dayjs.extend(isYesterday)

const isTomorrow = require('dayjs/plugin/isTomorrow')
dayjs.extend(isTomorrow)

const isToday = require('dayjs/plugin/isToday')
dayjs.extend(isToday)

const isLeapYear = require("dayjs/plugin/isLeapYear")
dayjs.extend(isLeapYear)

const AbstractNode = require('../abstract')

class DatetimeUnwrapBoolean extends AbstractNode {

  static metadata() {
    return {
      name: 'UnwrapBoolean',
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
          name: 'IsTomorrow',
          type: 'basic/boolean'
        },
        isToday: {
          code: 'isToday',
          name: 'IsToday',
          type: 'basic/boolean'
        },
        isYesterday: {
          code: 'isYesterday',
          name: 'IsYesterday',
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
