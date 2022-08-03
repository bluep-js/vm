const dayjs = require('dayjs')
 
const AbstractNode = require('../abstract')

class DatetimeUnix extends AbstractNode {

  static metadata() {
    return {
      name: 'Unix',
      code: 'datetime/unix',
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
        unix: {
          code: 'unix',
          name: 'Unix Epoch (sec)',
          type: 'basic/number'
        },
        unixms: {
          code: 'unixms',
          name: 'Unix Epoch (ms)',
          type: 'basic/number'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const d = dayjs(inputs.datetime)
    this.setOutput('unix', d.unix())
    this.setOutput('unixms', d.valueOf()) 
  }
}

module.exports = DatetimeUnix
