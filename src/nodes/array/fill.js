const AbstractNode = require('../abstract')

class ArrayFill extends AbstractNode {

  static metadata() {
    return {
      name: 'Fill',
      code: 'array/fill',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        array: {
          code: 'array',
          name: 'Array',
          type: 'basic/template',
          template: 'A/array'
        },
        value: {
          code: 'value',
          name: 'Value',
          type: 'basic/template',
          template: 'A'
        },
        startIndex: {
          code: 'startIndex',
          name: 'From',
          type: 'basic/number'
        },
        endIndex: {
          code: 'endIndex',
          name: 'To',
          type: 'basic/number'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'A/array'
        }
      },
      templates: {
        A: {
          allow: ['*'],
          variants: {
            array: {
              $add: {
                isArray: 1
              }
            }
          },
          info: {
            isArray: 0,
            canBeArray: true
          }
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array, inputs.value)
    if (Array.isArray(inputs.array)) {
      const res = inputs.array.fill(inputs.value);
      this.setOutput('result', res)
    } else {
      this.error('Input is not array!')
    }
  }
}

module.exports = ArrayFill
