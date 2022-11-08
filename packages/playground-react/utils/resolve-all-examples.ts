// https://github.com/tailwindlabs/headlessui/blob/main/packages/playground-react/utils/resolve-all-examples.ts

import fs from 'fs';
import path from 'path';

export type ExamplesType = {
  name: string;
  path: string;
  children?: ExamplesType[];
};

export const resolveAllExamples = async (...paths: string[]) => {
  const base = path.resolve(process.cwd(), ...paths);

  if (!fs.existsSync(base)) {
    return false;
  }

  const files = await fs.promises.readdir(base, { withFileTypes: true });
  const items: ExamplesType[] = [];

  for (const file of files) {
    if (file.name === '.DS_Store') {
      continue;
    }

    if (file.name.startsWith('_')) {
      continue;
    }

    if (file.name.includes('index')) {
      continue;
    }

    const bucket: ExamplesType = {
      name: file.name.replace(/-/g, ' ').replace(/\.tsx?/g, ''),
      path: [...paths, file.name]
        .join('/')
        .replace(/^pages/, '')
        .replace(/\.tsx?/g, '')
        .replace(/\/+/g, '/'),
    };

    if (file.isDirectory()) {
      const children = await resolveAllExamples(...paths, file.name);

      if (children) {
        bucket.children = children;
      }
    }

    items.push(bucket);
  }

  return items;
};
