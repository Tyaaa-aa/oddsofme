import { supabase } from '../supabase'
import { promises as fs } from 'fs'
import path from 'path'


const cacheFilePath = path.join(process.cwd(), 'cache/sources-cache.json')

export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`trait_id, source, category`)
      .order('trait_id', { ascending: true })
    if (error) {
      console.error('Error fetching sources:', error)
      throw new Error('Error fetching sources from Supabase')
    }

    const jsonData = JSON.stringify(data as Sources[], null, 2) // Pretty print 2-spaces

    await fs.writeFile(cacheFilePath, jsonData)

    return { message: 'Data cached successfully', data }
  } catch (err) {
    console.error('Error processing request:', err)
    return { error: 'An error occurred while processing the request' }
  }
})

async function updateCache(data: any, filename: string) {
  try {
    const filename = 'sources-cache.json'
    const data = {example: 'data'}
    const response = await $fetch('https://tya.design/nldserver/static/oddsofme/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Action-Type': 'update', // Either update or read (if not specified, defaults to read)
        'Authorization': 'Bearer ' + process.env.NLDSERVER_SECRET
      },
      body: JSON.stringify({
        filename, // This is the filename to save the data as
        data, // This is the data to send to the server
      }),
    })

    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }

    // const responseData = await response.json();
    // console.log('Server response:', responseData);
  } catch (error) {
    console.error('Error sending data to server:', error);
  }
}