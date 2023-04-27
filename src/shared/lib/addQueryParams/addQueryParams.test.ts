import { addQueryParams } from './addQueryParams'

describe('shared/url/addQueryParams', function () {
  test('test with one param', () => {
    const params = addQueryParams({ test: 'value' })
    expect(params).toBe('?test=value')
  })

  test('test with some param', () => {
    const params = addQueryParams({ test: 'value', second: 'value2' })
    expect(params).toBe('?test=value&second=value2')
  })
})
