const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class FloatAssign extends AbstractNode {

  static metadata() {
    return {
      name: 'A =. B',
      code: 'float/assignFloat',
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
          type: 'basic/float',
          template: 'NumberFloat'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/template',
          template: 'NumberFloat'
        }
      },  
      templates: {
        NumberFloat: {
          allow: ['basic/number','basic/float']
        } 
      },
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('result', inputs.valA = inputs.valB)
  }
}

module.exports = FloatAssign
