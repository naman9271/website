import { resolve } from 'path';
import fs from 'fs/promises';
import { buildAdoptersList } from '../../../npm/adopters/index';

describe('Integration Test for buildAdoptersList', () => {
  const configDir = resolve(__dirname, '../../../config');
  const outputFilePath = resolve(configDir, 'adopters.json');
  const inputFilePath = resolve(configDir, 'adopters.yml');

  beforeAll(async () => {
    // Ensure the config directory exists
    await fs.mkdir(configDir, { recursive: true });

    // Create the input YAML file with sample data
    const yamlContent = `
      - name: Company A
        website: https://companya.com
      - name: Company B
        website: https://companyb.com
    `;
    await fs.writeFile(inputFilePath, yamlContent, 'utf-8');
  });

  afterAll(async () => {
    // Clean up the generated JSON file and input YAML file
    try {
      await fs.unlink(outputFilePath);
      await fs.unlink(inputFilePath);
    } catch (err) {
      // Ignore errors if files do not exist
    }
  });

  test('should create adopters.json file with valid JSON content', async () => {
    // Call the function directly from the npm folder
    await buildAdoptersList();

    // Validate the generated JSON file
    const fileContent = await fs.readFile(outputFilePath, 'utf-8');
    const json = JSON.parse(fileContent);

    expect(json).toBeDefined();
    expect(Array.isArray(json)).toBe(true);
    expect(json).toEqual([
      { name: 'Company A', website: 'https://companya.com' },
      { name: 'Company B', website: 'https://companyb.com' },
    ]);
  }, 5000);
});
