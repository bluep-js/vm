const AbstractNode = require('../abstract')

class StringLength extends AbstractNode {

  static metadata() {
    return {
      name: 'Length',
      code: 'string/length',
      type: 'modifier',
      inputs: {
        source: {
          code: 'source',
          name: 'Source',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Length',
          type: 'basic/number'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = typeof inputs.source === 'string'
      ? inputs.source.length
      : undefined
    this.setOutput('result', ret)
  }
}

module.exports = StringLength
