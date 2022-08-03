const dayjs = require('dayjs')
const toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)

const AbstractNode = require('../abstract')

class DatetimeAdd extends AbstractNode {

  static metadata() {
    return {
      name: 'Add',
      code: 'datetime/add',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        value: {
          code: 'value',
          name: 'Value',
          type: 'basic/datetime'
        },
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/number',
        },
        type: {
          code: 'type',
          name: 'A',
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

module.exports = DatetimeAdd

 