const AbstractNode = require('../abstract')
const AbstractActor = require('../../module/actor/abstract')

class ClassVariableSet extends AbstractNode {

  static metadata() {
    return {
      name: 'ClassVariableSet',
      code: 'class/set',
      type: 'execute',
      deleteable: true,
      addable: false,
      inputs: {
        call: {
          code: 'call',
          name: 'Call',
          type: 'basic/execute'
        },
        object: {
          code: 'object',
          name: 'Object',
          type: 'bluep/class'
        }
      },
      outputs: {
        return: {
          code: 'return',
          name: 'Return',
          type: 'basic/execute'
        }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', this._node.code, inputs)
    if (this._node.data.context === 'schema') {
      if (!inputs.object) return 'return'
      // actors states are working save as class properies
      if (inputs.object instanceof AbstractActor) {
        inputs.object._state[this._node.data.code] = inputs[this._node.data.code]
      } else {
        inputs.object[this._node.data.code] = inputs[this._node.data.code]
      }
    } else {
      this._context.setOutput(this._node.data.context, this._node.data.code, inputs[this._node.data.code])
    }
    return 'return'
  }
}

module.exports = ClassVariableSet
