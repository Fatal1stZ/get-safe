import React, { FC, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BuyflowContext } from '../Buyflow'
import './styles.css'

export const SummaryStep: FC = () => {
  const { values } = useContext(BuyflowContext)
  return (
    <div className={'Summary-wrapper'}>
      <dl>
        {Object.entries(values).map(([key, value], i) => (
          <Fragment key={i}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
      <Link to="/purchased=dev_ins">Purchase</Link>
    </div>
  )
}
