const dayjs = require('dayjs')
 
const AbstractNode = require('../abstract')

class DatetimeFromUnix extends AbstractNode {

  static metadata() {
    return {
      name: 'From Unix',
      code: 'datetime/fromUnix',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        unix: {
          code: 'unix',
          name: 'Unix Epoch (sec/ms)',
          type: 'basic/number'
        }
      },
      outputs: {
        datetime: {
          code: 'datetime',
          name: 'Datetime',
          type: 'basic/datetime'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const d = dayjs(inputs.unix)
    this.setOutput('datetime', d) 
  }
}

module.exports = DatetimeFromUnix
