const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class FloatMultiply extends AbstractNode {

  static metadata() {
    return {
      name: 'A. * B.',
      code: 'float/multiply',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/float'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/template',
          template: 'NumberFloat'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/float'
        }
      },
      templates: {
        NumberFloat: {
          allow: ['basic/number', 'basic/float']
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    let ret = inputs.valA * inputs.valB
    this.setOutput('result', ret)
  }
}

module.exports = FloatMultiply
