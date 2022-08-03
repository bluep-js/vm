const AbstractNode = require('../abstract')

class MathLog extends AbstractNode {

  static metadata() {
    return {
      name: 'Log',
      code: 'math/log',
      type: 'modifier',
      deleteable: true,
      addable: true,
      inputs: {
        valA: {
          code: 'valA',
          name: 'Source',
          type: 'basic/float', 
        },
      },
      outputs: {
        result: {
          code: 'result',
          name: 'log(Source)',
          type: 'basic/float' 
        }
      } 
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const ret = Math.log(inputs.valA)
    this.setOutput('result', ret)
  }
}

module.exports = MathLog
