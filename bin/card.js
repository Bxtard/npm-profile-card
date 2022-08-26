#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('  Bryan Steeven Estrada Meza'),
  handle: chalk.white('@Bxtard'),
  shorthandle: chalk.white('bxtrd'),
  work: chalk.white('FullStack developer'),
  instagram: chalk.gray('https://instagram.com/') + chalk.cyan('bxtrda'),
  github: chalk.gray('https://github.com/') + chalk.green('bxtrd'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('bxtrda'),
  // web: chalk.cyan('YOUR_WEB_SITE_URL'),
  npx: chalk.red('npx') + ' ' + chalk.white('bxtard'),
  labelWork: chalk.white.bold('      Work:'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  // labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const instagraming = `${data.labelInstagram}  ${data.instagram}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               instagraming + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               // webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

const content = chalk.green(boxen(output, options))

console.log(content)
