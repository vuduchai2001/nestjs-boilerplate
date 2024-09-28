/* eslint-disable no-console */
// Reference: https://github.com/Vadym342/user-base-api/blob/ea228a224eba6eba294f92a1bbe7987cb928296a/user-base/user-project-server/test/utils/index.ts

import * as path from 'path';

import { DockerComposeEnvironment } from 'testcontainers';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env.test') });

export const dockerEnv = {
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASS: process.env.DATABASE_PASS,
};

export const setupDockerTestEnvironment = () => {
  const composeFilePath = path.resolve(__dirname, '..');
  const composeFile = 'docker-compose.e2e.yaml';

  const dockerContainer = new DockerComposeEnvironment(
    composeFilePath,
    composeFile,
  )
    .withEnvironment(dockerEnv)
    .withBuild();

  return dockerContainer.up();
};
