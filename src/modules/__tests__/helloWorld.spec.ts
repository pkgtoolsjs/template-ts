import { describe, it, expect } from 'vitest'
import helloWorld from '../helloWorld'

describe('helloWorld', () => {
  it('should return hello world with given string', () => {
    expect(helloWorld('vitest')).toBe('hello world! vitest')
  })

  it('should work with empty string', () => {
    expect(helloWorld('')).toBe('hello world! ')
  })
})
