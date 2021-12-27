import React, { FC, useContext } from 'react'
import { object, string } from 'yup'
import { Field, Form } from '../../components'
import { BuyflowContext } from '../Buyflow'

const schema = object({
  firstName: string().required().max(100),
  lastName: string().required().max(100),
}).required()

export const NameStep: FC = () => {
  const { goNextStep } = useContext(BuyflowContext)
  return (
    <Form onSubmit={goNextStep} validationSchema={schema}>
      <Field name={'firstName'} title={'First name'} />
      <Field name={'lastName'} title={'Last name'} />
      <button type={'submit'}>Next</button>
    </Form>
  )
}
