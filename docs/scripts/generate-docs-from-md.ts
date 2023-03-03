import path from 'path';

import fse from 'fs-extra';
import glob from 'globby';

import { DOCS_ROOT, PACKAGES_ROOT } from './constants';

const OUT_DIR = DOCS_ROOT;

async function copyMDDocs(outdir: string, exclude: string[] = []) {
  const filepaths = await glob(`**/*.md`, {
    cwd: PACKAGES_ROOT,
    ignore: exclude,
  });

  console.log(filepaths);
  await Promise.all(
    filepaths.map(async (filepath) => {
      const source = path.join(PACKAGES_ROOT, filepath);
      const destination = path.join(outdir, filepath);

      await fse.ensureDir(path.dirname(destination));
      await fse.copy(source, destination);
    }),
  );
}

export async function generateDocsFromMD() {
  return Promise.all([copyMDDocs(OUT_DIR)]);
}
