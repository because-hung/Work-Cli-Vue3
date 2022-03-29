export const fetchFakeApi = () => {
  return new Promise((resolve) => {
    const res = {
      data: {
        columns: [
          { id: 1, name: 'Jack', price: 2000 },
          { id: 2, name: 'peter', price: 5000 },
          { id: 3, name: 'ken', price: 1640 }
        ]
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}
