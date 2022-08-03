const AbstractNode = require('../abstract')

class Parallel extends AbstractNode {

  static metadata() {
    return {
      name: 'Parallel',
      code: 'execute/parallel',
      type: 'execute',
      deleteable: true,
      addable: true,
      inputs: {
        call: {
          code: 'call',
          name: 'Call',
          type: 'basic/execute'
        },
        branch: {
          code: 'branch',
          name: 'Execute',
          type: 'basic/boolean',
          value: true,
          multiple: 'A'
        }
      },
      outputs: {
        done: {
          code: 'done',
          name: 'Done',
          type: 'basic/execute'
        },
        branch: {
          code: 'branch',
          name: 'Branch',
          type: 'basic/execute',
          multiple: 'A'
        }
      },
      multiples: {
        A: { min: 1, value: 1 }
      }
    }
  }

  async execute(inputs) {
    this.debug('execute', inputs)
    const list = []
    Object.keys(inputs).forEach(key => {
      if (key.startsWith('branch') && inputs[key]) list.push(this.callOutput(key))
    })
    await Promise.all(list)
    return 'done'
  }
}

module.exports = Parallel
