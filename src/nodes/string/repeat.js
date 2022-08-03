const AbstractNode = require('../abstract')

class StringRepeat extends AbstractNode {

  static metadata() {
    return {
      name: 'Repeat',
      code: 'string/repeat',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/string'
        },
        valB: {
          code: 'valB',
          name: 'Times',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Repeat',
          type: 'basic/string'
        }
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = typeof inputs.valA === 'string'
      ? inputs.valA.repeat(inputs.valB)
      : undefined
    this.setOutput('result', ret)
  }
}

module.exports = StringRepeat
