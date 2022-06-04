const AbstractNode = require('@bluepjs/vm/src/nodes/abstract')

class StringToUpperCase extends AbstractNode {

  static metadata() {
    return {
      name: 'toUpperCase',
      code: 'string/toUC',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
          result: {
            code: 'result',
            name: 'Result',
            type: 'basic/string'
          }
        },
      outputs: {
        result: {
          code: 'result',
          name: 'Result',
          type: 'basic/string'
        }
      }
    }
  }
/*   async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('toUC', inputs.toUpperCase)
  }
}
 */
/*     async execute(inputs) {
    this.debug('execute', inputs)
    this.setOutput('toUpperCase', inputs.toUpperCase)
  }
}   
 */
/*   async execute(inputs) {
  this.debug('execute', inputs)
  const ret = ValA.toUpperCase
  this.setOutput('toUC', ret)
} */

/*   async execute(inputs) {
  this.debug('execute', inputs)
  this.setOutput('toUC', inputs.toUpperCase)  
} 
} */
async execute(inputs) {
  this.debug('execute', inputs)
  this.setOutput('string', `toUpperCase{inputs.number}`)
}
}

module.exports = StringToUpperCase
