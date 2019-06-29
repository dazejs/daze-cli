
const controllerLib = require('./controller')
const serviceLib = require('./service')
const resourceLib = require('./resource')
const componentLib = require('./component')
const validateLib = require('./validate')

const cwd = process.cwd()

module.exports = function (program) {
  const args = program.args

  const type = args[0]

  switch (type) {
    case 'controller':
      controllerLib(program)
      break
    case 'service':
      serviceLib(program)
      break
    case 'resource':
      resourceLib(program)
      break
    case 'component':
      componentLib(program)
      break
    case 'validate':
      validateLib(program)
      break
    default:
      break
  }
}