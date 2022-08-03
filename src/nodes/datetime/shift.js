const dayjs = require('dayjs')
const AbstractNode = require('../abstract')

class DatetimeShift extends AbstractNode {

  static metadata() {
    return {
      name: 'Shift',
      code: 'datetime/shift',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        value: {
          code: 'value',
          name: 'Datetime',
          type: 'basic/datetime'
        },
        valA: {
          code: 'valA',
          name: 'Shift',
          type: 'basic/number',
        },
        type: {
          code: 'type',
          name: 'Granularity',
          type: 'basic/string',
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/datetime'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    if (inputs.value) {
      const date = dayjs(inputs.value)
      this.setOutput('result', date.add(inputs.valA, inputs.type) )
    }
  }  
}

module.exports = DatetimeShift
