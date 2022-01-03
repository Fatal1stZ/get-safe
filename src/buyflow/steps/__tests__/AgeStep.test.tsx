import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AgeStep } from '../AgeStep'
import { BuyflowContext } from '../../Buyflow'

test('validating age step - should go next step', async () => {
  const goNextStep = jest.fn()

  render(
    <BuyflowContext.Provider value={{ values: {}, goNextStep }}>
      <AgeStep />
    </BuyflowContext.Provider>
  )

  const ageInput = screen.getByTestId('age')
  const form = screen.getByTestId('form')

  fireEvent.change(ageInput, { target: { value: 10 } })
  await waitFor(() => {
    fireEvent.submit(form)
  })
  expect(goNextStep).toBeCalled()
})

test('validating age step - should not go next step', async () => {
  const goNextStep = jest.fn()

  render(
    <BuyflowContext.Provider value={{ values: {}, goNextStep }}>
      <AgeStep />
    </BuyflowContext.Provider>
  )

  const ageInput = screen.getByTestId('age')
  const form = screen.getByTestId('form')

  fireEvent.change(ageInput, { target: { value: 'abc' } })
  await waitFor(() => {
    fireEvent.submit(form)
  })
  expect(goNextStep).not.toBeCalled()
})
