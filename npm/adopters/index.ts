import { buildAdoptersList } from '../../scripts/adopters/index';

(async () => {
  try {
    await buildAdoptersList();
    console.log('Adopters list generated successfully.');
  } catch (error) {
    console.error('Failed to build adopters list:', error);
    process.exit(1);
  }
})();
export { buildAdoptersList };

