import { promises as fs } from 'fs';
import path from 'path';
const cacheFilePath = path.join(process.cwd(), 'sources-cache.json');
export default defineEventHandler(async (event) => {
  try {
    const data = await fs.readFile(cacheFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error fetching cached data:', err);
    throw new Error('Error fetching cached data');
  }
})
