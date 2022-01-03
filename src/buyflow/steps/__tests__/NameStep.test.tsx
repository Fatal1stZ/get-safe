import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BuyflowContext } from '../../Buyflow'
import { NameStep } from '../NameStep'

test('validating name step - should go next step', async () => {
  const goNextStep = jest.fn()

  render(
    <BuyflowContext.Provider value={{ values: {}, goNextStep }}>
      <NameStep />
    </BuyflowContext.Provider>
  )

  const firstNameInput = screen.getByTestId('firstName')
  const lastNameInput = screen.getByTestId('lastName')
  const form = screen.getByTestId('form')

  fireEvent.change(firstNameInput, { target: { value: 'eugene' } })
  fireEvent.change(lastNameInput, { target: { value: 'zabelin' } })
  await waitFor(() => {
    fireEvent.submit(form)
  })
  expect(goNextStep).toBeCalled()
})

test('validating name step - should not go next step', async () => {
  const goNextStep = jest.fn()

  render(
    <BuyflowContext.Provider value={{ values: {}, goNextStep }}>
      <NameStep />
    </BuyflowContext.Provider>
  )

  const firstNameInput = screen.getByTestId('firstName')
  const lastNameInput = screen.getByTestId('lastName')
  const form = screen.getByTestId('form')

  fireEvent.change(firstNameInput, { target: { value: '' } })
  fireEvent.change(lastNameInput, { target: { value: '' } })
  await waitFor(() => {
    fireEvent.submit(form)
  })
  expect(goNextStep).not.toBeCalled()
})
