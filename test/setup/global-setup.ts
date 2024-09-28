import { setupDockerTestEnvironment } from './testcontainer';

module.exports = async (): Promise<void> => {
  // Initialize MongoDB Test Container
  console.info('=== SETUP DOCKER TEST CONTAINER ===');

  const dockerInstance = await setupDockerTestEnvironment();

  global.dockerInstance = dockerInstance;

  console.info('=== DOCKER TEST CONTAINER IS NOW RUNNING ===');
};
