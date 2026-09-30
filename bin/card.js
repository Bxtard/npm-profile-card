#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

import chalk from 'chalk'
import boxen from 'boxen'

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('  Bryan Steeven Estrada Meza'),
  handle: chalk.white('@Bxtard'),
  shorthandle: chalk.white('bxtard'),
  work: chalk.white('Ombia Junior Software Developer III'),
  github: chalk.gray('https://github.com/') + chalk.green('bxtrd'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('bxtrda'),
  portafolio: chalk.cyan('https://bxtard.github.io/portafolio/'),
  npx: chalk.red('npx') + ' ' + chalk.white('bxtard'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelPortafolio: chalk.white.bold('Portafolio:'),
  labelCard: chalk.white.bold('      Card:')
}

const newline = '\n'
const head = `${data.name} / ${data.handle} / ${data.shorthandle}`
const work = `${data.labelWork}  ${data.work}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const portafolio = `${data.labelPortafolio}  ${data.portafolio}`
const carding = `${data.labelCard}  ${data.npx}`

const output =  head +
                newline + newline +
                work + newline +
                github + newline +
                linkedin + newline +
                portafolio + newline +
                carding
const content = chalk.green(boxen(output, options))

console.log(content)
