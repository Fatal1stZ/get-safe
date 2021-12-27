import React, { FC, useContext } from 'react'
import { number, object } from 'yup'
import { Field, Form } from '../../components'
import { BuyflowContext } from '../Buyflow'

const schema = object({
  age: number().min(1).max(100),
}).required()

export const AgeStep: FC = () => {
  const { goNextStep } = useContext(BuyflowContext)
  return (
    <Form onSubmit={goNextStep} defaultValues={{ age: 0 }} validationSchema={schema}>
      <Field name={'age'} title={'Age'} />
      <button type={'submit'}>Next</button>
    </Form>
  )
}
