export const sendRequest = <T>(endpoint: string, dataToSend: T) => {
  fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
}
