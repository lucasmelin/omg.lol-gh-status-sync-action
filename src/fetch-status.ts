import fetch from 'node-fetch'

export async function fetchStatus(
  url: string
): Promise<{emoji: string; message: string}> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  })
  const data = (await response.json()) as OmgStatus
  return {
    emoji: data.response.status.emoji,
    message: data.response.status.content
  }
}

type OmgStatus = {
  request: {
    status_code: number
    success: boolean
  }
  response: {
    message: string
    status: {
      id: string
      address: string
      created: string
      relative_time: string
      emoji: string
      content: string
    }
  }
}
