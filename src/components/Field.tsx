import React, { FC, InputHTMLAttributes } from 'react'
import { useController } from 'react-hook-form'
import './styles.css'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title: string
}

export const Field: FC<IField> = (props) => {
  const { name, title, ...inputProps } = props

  const {
    field,
    fieldState: { invalid, error },
  } = useController<any, string>({ name })

  return (
    <div className={'Field-wrapper'}>
      <div>{title}</div>
      <div>
        <input {...field} {...inputProps} />
      </div>
      {invalid && <div className={'Field-error'}>{error?.message}</div>}
    </div>
  )
}
