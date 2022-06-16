export const fetchFakeApi = () => {
  return new Promise((resolve) => {
    const res = {
      data: {
        columns: [
          {
            name: 'tom17',
            country: 'USA',
            id: 'live',
            food: [
              {
                id: 153252,
                cookie: 'straw'
              },
              {
                id: 744138,
                cookie: 'banana'
              },
              {
                id: 184312,
                cookie: 'menlon'
              }
            ]
          },
          {
            name: 'bay12',

            country: 'CANA',
            id: 'fixtures',
            food: [
              {
                id: 102482,
                cookie: 'straw'
              },
              {
                id: 407782,
                cookie: 'water'
              },
              {
                id: 889782,
                cookie: 'coden'
              },
              {
                id: 482187,
                cookie: 'beer'
              },
              {
                id: 105538,
                cookie: 'queen'
              }
            ]
          },
          {
            name: 'Kom',

            country: 'lorea',
            id: 'finish',
            food: [
              {
                id: 102738,
                cookie: 'stw'
              },
              {
                id: 780457,
                cookie: 'kta'
              }
            ]
          },
          {
            name: 'pp',

            country: 'USAaaa',
            id: 'others',
            food: [
              {
                id: 102239,
                cookie: 'sneak'
              },
              {
                id: 402493,
                cookie: 'fgh'
              },
              {
                id: 987662,
                cookie: 'tty'
              },
              {
                id: 569732,
                cookie: 'skll'
              }
            ]
          }
        ]
      }
    }
    setTimeout(() => {
      resolve(res)
    }, 2000)
  })
}
