import test from 'node:test'
import assert from 'node:assert/strict'
import { BUDGETS, canSelectType } from './budgetRules.js'
test('institucional só aparece em faixas que comportam R$ 1.900', () => {
  assert.equal(canSelectType('institucional', 'ate900'), false)
  assert.equal(canSelectType('institucional', '900-1600'), false)
  for (const budget of ['1600-3000', '3000-6000', 'acima6000']) assert.equal(canSelectType('institucional', budget), true)
})
test('landing page e orientação continuam disponíveis em todas as faixas', () => {
  for (const {value} of BUDGETS) {
    assert.equal(canSelectType('lp', value), true)
    assert.equal(canSelectType('nao-sei', value), true)
  }
})
test('antes de escolher orçamento, não restringir institucional', () => {
  assert.equal(canSelectType('institucional', ''), true)
})
