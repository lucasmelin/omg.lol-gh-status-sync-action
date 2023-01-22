export async function fetchStatus(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    const data = await response.json();
    return { emoji: data.response.status.emoji, message: data.response.status.content }
}