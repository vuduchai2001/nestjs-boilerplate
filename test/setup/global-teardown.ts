module.exports = () => {
  console.info('=== TEARDOWN DOCKER TEST CONTAINER ===');
  global?.dockerContainer?.down();
  console.info('=== DONE TEARDOWN DOCKER TEST CONTAINER ===');
};
