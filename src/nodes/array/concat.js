const AbstractNode = require('../abstract')

class ArrayConcat extends AbstractNode {

  static metadata() {
    return {
      name: 'Concat',
      code: 'array/concat',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        array: {
          code: 'array',
          name: 'Array',
          type: 'basic/template',
          template: 'A',
          isArray: true,
        },
        array2: {
          code: 'array2',
          name: 'Array2',
          type: 'basic/template',
          template: 'A',
          multiple: 'A',
          isArray: true,
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'A',
          isArray: true
        },
      },
      templates: {
        A: {
          allow: ['*']
        }
      },
      multiples: {
        A: {
          value: 1,
          min: 1
        }
      }
    }
  }

  async execute(inputs) {
    let ret = inputs.array
    if (Array.isArray(inputs.array, inputs.array2)) {
      Object.keys(inputs).forEach(inp => {
        if (inp.startsWith('array2')) ret = ret.concat(inputs[inp])
      })
      this.setOutput('result', ret)
    }

  }
}

module.exports = ArrayConcat