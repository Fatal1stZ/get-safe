import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BuyflowContext } from '../../Buyflow'
import { EmailStep } from '../EmailStep'

test('validating email step - should go next step', async () => {
  const goNextStep = jest.fn()

  render(
    <BuyflowContext.Provider value={{ values: {}, goNextStep }}>
      <EmailStep />
    </BuyflowContext.Provider>
  )

  const emailInput = screen.getByTestId('email')
  const form = screen.getByTestId('form')

  fireEvent.change(emailInput, { target: { value: 'fatal1st@yandex.ru' } })
  await waitFor(() => {
    fireEvent.submit(form)
  })
  expect(goNextStep).toBeCalled()
})

test('validating email step - should not go next step', async () => {
  const goNextStep = jest.fn()

  render(
    <BuyflowContext.Provider value={{ values: {}, goNextStep }}>
      <EmailStep />
    </BuyflowContext.Provider>
  )

  const emailInput = screen.getByTestId('email')
  const form = screen.getByTestId('form')

  fireEvent.change(emailInput, { target: { value: 'fatal1st' } })
  await waitFor(() => {
    fireEvent.submit(form)
  })
  expect(goNextStep).not.toBeCalled()
})
