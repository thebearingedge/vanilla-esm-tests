import { describe, expect, it } from 'vitest'
import { add, subtract } from './index'

describe('add(x, y)', () => {

  it('returns the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

})

describe('subtract(x, y)', () => {

  it('returns the difference between two numbers', () => {
    expect(subtract(7, 4)).toBe(3)
  })

})
