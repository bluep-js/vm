const AbstractNode = require('../abstract')

class NumberToString extends AbstractNode {

  static metadata() {
    return {
      name: 'To String',
      code: 'number/tostring',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        number: {
          code: 'number',
          name: 'Number',
          type: 'basic/template',
          template: 'NumberFloat'
        }
      },
      outputs: {
        string: {
          code: 'string',
          name: 'String',
          type: 'basic/string',
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number','basic/float']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('string', `${inputs.number}`)
  }
}

module.exports = NumberToString
