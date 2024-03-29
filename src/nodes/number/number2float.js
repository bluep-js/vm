const AbstractNode = require('../abstract')

class NumberToFloat extends AbstractNode {

  static metadata() {
    return {
      name: 'To Float',
      code: 'number/tofloat',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        number: {
          code: 'number',
          name: 'Number',
          type: 'basic/number'
        }
      },
      outputs: {
        f: {
          code: 'f',
          name: 'Float',
          type: 'basic/float'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('f', inputs.number)
  }
}


module.exports = NumberToFloat
