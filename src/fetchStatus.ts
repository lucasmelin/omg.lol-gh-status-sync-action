import fetch from 'node-fetch'

export async function fetchStatus(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    const data: any = await response.json();
    return { emoji: data.response.status.emoji, message: data.response.status.content }
}