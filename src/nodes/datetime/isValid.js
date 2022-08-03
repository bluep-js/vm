const dayjs = require('dayjs')

const AbstractNode = require('../abstract')

class DatetimeIsValid extends AbstractNode {

  static metadata() {
    return {
      name: 'IsValid',
      code: 'datetime/isValid',
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
          name: 'Is valid',
          type: 'basic/boolean'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const a = dayjs(inputs.datetime)
    this.setOutput('result', a.isValid())

}}


module.exports = DatetimeIsValid
