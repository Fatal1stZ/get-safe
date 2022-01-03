import React from 'react'
import { createMemoryHistory } from 'history'

import { render, screen } from '@testing-library/react'
import { Buyflow } from '../Buyflow'
import { Route, Router } from 'react-router-dom'

test('renders dev insurance buyflow', () => {
  render(
    <Router history={createMemoryHistory({ initialEntries: ['/buy/dev_ins'] })}>
      <Route path="/buy/:productId">
        <Buyflow />
      </Route>
    </Router>
  )
  const firstInput = screen.getByTestId('email')
  expect(firstInput).toBeInTheDocument()
})

test('renders designer insurance buyflow', () => {
  render(
    <Router history={createMemoryHistory({ initialEntries: ['/buy/designer_ins'] })}>
      <Route path="/buy/:productId">
        <Buyflow />
      </Route>
    </Router>
  )
  const firstInput = screen.getByTestId('firstName')
  const secondInput = screen.getByTestId('lastName')
  expect(firstInput).toBeInTheDocument()
  expect(secondInput).toBeInTheDocument()
})

test('should render with unknown buyflow', () => {
  render(
    <Router history={createMemoryHistory({ initialEntries: ['/buy/unknown_ins'] })}>
      <Route path="/buy/:productId">
        <Buyflow />
      </Route>
    </Router>
  )

  const notFound = screen.getByText('Step not found')
  expect(notFound).toBeInTheDocument()
})
