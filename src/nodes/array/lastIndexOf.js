const AbstractNode = require('../abstract')

class ArrayLastIndexOf extends AbstractNode {

  static metadata() {
    return {
      name: 'Last index of',
      code: 'array/lastIndexOf',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        array: {
          code: 'array',
          name: 'Array',
          type: 'basic/template',
          template: 'A/array',
        },
        fromElement: {
          code: 'fromElement',
          name: 'Element',
          type: 'basic/template',
          template: 'A',
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/number'
        },
      },
      templates: {
        A: {
          allow: ['*'],
          info: {
            isArray: 0,
          },
          variants: {
            array: {
              $add: {
                isArray: 1
              }
            }
          },
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs.array)
    if (Array.isArray(inputs.array)) {
      const res = inputs.array.lastIndexOf(inputs.fromElement);
      this.setOutput('result', res)
    }
  }
}

module.exports = ArrayLastIndexOf
