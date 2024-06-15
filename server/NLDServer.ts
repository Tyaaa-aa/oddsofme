type NLDServerResponse = {
  message?: string
  ok: boolean
  error?: string
  time: {
    pretty: string
    epoch: number
  }
  data?: any
}

export async function NLDServer(actionType: 'read' | 'update' = 'read', fileName: string, data?: any): Promise<NLDServerResponse> {
  const payload = data 
  ? 
  { filename: fileName, data: data }
  :
  { filename: fileName };

  try {
    const updateCacheResponse = await $fetch('https://server.nightlights.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NLDSERVER_SECRET}`,
        'Application-Name': 'oddsofme',
        'Action-Type': actionType,
      },
      body: JSON.stringify(payload),
    }) as NLDServerResponse

    return updateCacheResponse
  } catch (error) {
    console.error('Error sending data to server:', error)
    return {
      ok: false,
      error: error as string ?? 'Unknown error',
      time: {
        pretty: new Date().toLocaleString(),
        epoch: Date.now(),
      },
    } as NLDServerResponse
  }
}
