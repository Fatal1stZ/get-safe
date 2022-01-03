import { yupResolver } from '@hookform/resolvers/yup'
import React, { Children, createElement, FC, ReactElement } from 'react'
import { FormProvider } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { AnyObjectSchema, object } from 'yup'
import './styles.css'

interface IForm {
  defaultValues?: Record<string, any>
  children: ReactElement[]
  onSubmit: (values: Record<string, any>) => void
  validationSchema?: AnyObjectSchema
}
export const Form: FC<IForm> = ({
  defaultValues = {},
  children = [],
  onSubmit,
  validationSchema = object(),
}) => {
  const methods = useForm({
    defaultValues,
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={'Form-wrapper'} data-testid={'form'}>
        {Children.map(children, (child) =>
          child?.props?.name
            ? createElement(child.type, { ...child.props, key: child.props.name })
            : child
        )}
      </form>
    </FormProvider>
  )
}
