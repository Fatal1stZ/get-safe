import React, { createContext, FC, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductIds } from '../types'
import { BUYFLOW_CONFIG, PRODUCT_IDS_TO_NAMES } from '../config'
import { NotFound } from '../components'

interface IPageParams {
  productId: ProductIds
}

interface IBuyflowContext {
  values: Record<string, any>
  goNextStep: (values: Record<string, any>) => void
}

export const BuyflowContext = createContext<IBuyflowContext>({
  values: {},
  goNextStep: () => {},
})

export const Buyflow: FC = () => {
  const { productId } = useParams<IPageParams>()
  const [firstStep] = BUYFLOW_CONFIG[productId] ?? []
  const [values, setValues] = useState({})
  const [currentStep, setCurrentStep] = useState(firstStep)
  const CurrentStep = currentStep?.component || NotFound

  const setNextStep = useCallback(() => {
    const currentStepIndex = BUYFLOW_CONFIG[productId].findIndex(
      ({ key }) => currentStep.key === key
    )
    const nextStep = BUYFLOW_CONFIG[productId][currentStepIndex + 1]
    setCurrentStep(nextStep)
  }, [currentStep, productId])

  const goNextStep = useCallback(
    (values) => {
      setValues((prevValues) => ({ ...prevValues, ...values }))
      setNextStep()
    },
    [setNextStep]
  )

  console.log('render', { currentStep, firstStep })

  return (
    <BuyflowContext.Provider value={{ values: values, goNextStep }}>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      <CurrentStep />
    </BuyflowContext.Provider>
  )
}
