 /* 
 const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class MathRound extends AbstractNode {

  static metadata() {
    return {
      name: 'Round',
      code: 'float/round',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        number: {
          code: 'number',
          name: 'Number',
          type: 'basic/float'
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
          allow: ['basic/string','basic/number']
        } 
      },
    }
  }


async execute(inputs) {
  this.debug('execute', inputs)
  let ret = Math.round()
  this.setOutput('result', ret)
}
}

module.exports = MathRound
*/