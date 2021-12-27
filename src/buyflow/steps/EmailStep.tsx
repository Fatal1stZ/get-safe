import React, { useContext } from 'react'
import { object, string } from 'yup'
import { Field, Form } from '../../components'
import { BuyflowContext } from '../Buyflow'

const schema = object({
  email: string().required().email(),
}).required()

export const EmailStep: React.FC = () => {
  const { goNextStep } = useContext(BuyflowContext)
  return (
    <Form onSubmit={goNextStep} validationSchema={schema}>
      <Field name={'email'} title={'Email'} />
      <button type={'submit'}>Next</button>
    </Form>
  )
}
