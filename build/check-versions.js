const chalk = require('chalk')
const { clean, satisfies } = require('semver')
const packageConfig = require('../package.json')
const { which } = require('shelljs')
const { execSync } = require('child_process')

let versionRequirements = [
  {
    name: 'node',
    currentVersion: clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

if (which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: execSync('npm --version').toString().trim(),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = () => {
  let warnings = []
  versionRequirements.forEach((mod) => {
    if (!satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(`${mod.name}:${chalk.red(mod.currentVersion)} should be ${chalk.green(mod.versionRequirement)}`)
    }
  })
  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    warnings.forEach((warning) => console.warn(`  ${warning}`))
    console.log()
    process.exit(1)
  }
}
