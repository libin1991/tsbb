
import { Options } from 'yargs';

export interface IYargsOptions {
  [key: string]: Options;
}

export const helpOption: IYargsOptions = {
  'help': {
    alias: 'h',
    describe: 'Show help.',
    type: 'boolean',
  },
}

export const publicOptions: IYargsOptions = {
  'source-root': {
    alias: 's',
    describe: 'The root from which all sources are relative.',
    type: 'string',
    default: 'src',
  },
  'copy-files': {
    describe: 'When compiling a directory copy over non-compilable files.',
    type: 'boolean',
    default: true,
  },
  'source-maps': {
    describe: 'Source Map options.',
    type: 'string',
    default: true,
    choices: [true, 'inline', 'both', 'none'],
  },
  'output': {
    alias: 'o',
    describe: 'Output directory.',
    type: 'string',
    default: 'lib',
  },
  'target': {
    describe: 'Specify your target environment.',
    type: 'string',
    choices: ['react', 'node'],
    default: 'node'
  },
  'comments': {
    describe: 'decide whether a given comment should be included in the output code.',
    type: 'boolean',
    default: true,
  }
}
