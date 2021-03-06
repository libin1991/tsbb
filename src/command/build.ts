import { Argv } from 'yargs';
import babel from '../babel';
import getFileDirectory, { IFileDirStat } from '../utils/getFileDirectory';
import { IMyYargsArgs, completePath } from '../utils';
import { publicOptions, helpOption } from './options';
import { ITargets } from '../babel/transform';

export const command = 'build [options]';
export const describe = 'Build your project once and exit.';

export function builder(yarg: Argv) {
  return yarg.option({
    ...helpOption,
    ...publicOptions,
  })
  .example('$ tsbb build ', 'Build your project.')
  .example('$ tsbb build --no-comments', 'Build your project and remove the comments.')
}

export interface IBuildArgs extends IMyYargsArgs {
  target: ITargets
}

export async function handler(args: IBuildArgs) {
  args = completePath(args) as IBuildArgs;
  try {
    const files = (await getFileDirectory(args.sourceRoot, args.output)) as [] as IFileDirStat[];
    await babel(files, args);
  } catch (error) {
    console.log(error);
  }
}