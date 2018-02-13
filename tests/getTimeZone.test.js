import getTimeZone from '../dist'
describe('getTimeZone', () => {
  it('should return 6', () => {
    expect(getTimeZone('2018-2-13 11:07:10', '2018-2-13 17:07:10')).toBe(6)
  })
  it('should return 3', () => {
    expect(getTimeZone('2018-2-13 23:01:20', '2018-2-14 2:01:15')).toBe(3)
  })
  it('should return -6', () => {
    expect(getTimeZone('2018-2-13 4:23:37', '2018-2-12 22:23:35')).toBe(-6)
  })
  it('should return 2', () => {
    expect(getTimeZone(new Date('Tue Feb 13 2018 11:07:10 GMT+0300'), new Date('Tue Feb 13 2018 11:07:10 GMT+0100'))).toBe(2)
  })
})
