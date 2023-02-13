import { classNames } from './classNames'

describe('classNames lib', () => {
  test('with only first param', () => {
    const cl = 'someClass'
    expect(classNames(cl)).toBe(cl)
  })
  test('with extends params', () => {
    const cl = {
      required: 'someClass',
      mods: {
        someClass_2: true,
        someClass_3: false
      },
      additional: ['someClass_4']
    }

    const result = 'someClass someClass_2 someClass_4'
    expect(classNames(cl.required, cl.mods, cl.additional)).toBe(result)
  })
})
