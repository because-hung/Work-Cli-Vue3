const request = test
export function test (data) {
  return request({
    url: 'api/test/',
    method: 'post',
    data
  })
}
