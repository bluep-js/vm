const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringIncludes extends AbstractNode {

  static metadata() {
    return {
      name: 'Includes',
      code: 'string/Includes',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'A',
          type: 'basic/string'
        },
        valB: {
          code: 'valB',
          name: 'B',
          type: 'basic/string'
        }
      },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/boolean'
        }
      },
    }
  }


    async execute(inputs) {
    this.debug('execute', inputs)
    const a = inputs.valA
    const b = inputs.ValB
    let ret = false
    if (inputs.a.includes.b)
    res = true
    this.setOutput('result', res)
    
    }
  }


module.exports = StringIncludes
