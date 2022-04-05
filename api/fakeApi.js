export const fetchFakeApi = () => {
  return new Promise((resolve) => {
    const res = {
      data: {
        columns: [
          { id: 1, name: 'Jack', price: 2000, video: 'https://www.youtube.com/embed/Y65kO3YcXFk' },
          { id: 2, name: 'peter', price: 5000, video: 'https://www.youtube.com/embed/jTXTyGjEze8' },
          { id: 3, name: 'ken', price: 1640, video: 'https://www.youtube.com/embed/Mw3rvycVqG4' }
        ]
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}
