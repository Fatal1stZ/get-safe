import { BuyflowConfig, BuyflowStep, BuyflowSteps, ProductIds } from '../types'
import { AgeStep, EmailStep, NameStep, SummaryStep } from '../buyflow/steps'

const COMMON_BUYFLOW_CONFIG: BuyflowStep[] = [
  {
    key: BuyflowSteps.EmailStep,
    component: EmailStep,
  },
  {
    key: BuyflowSteps.AgeStep,
    component: AgeStep,
  },
  {
    key: BuyflowSteps.SummaryStep,
    component: SummaryStep,
  },
]

const DEV_BUYFLOW_CONFIG: BuyflowStep[] = [...COMMON_BUYFLOW_CONFIG]

const DESIGNER_BUYFLOW_CONFIG: BuyflowStep[] = [
  {
    key: BuyflowSteps.NameStep,
    component: NameStep,
  },
  ...COMMON_BUYFLOW_CONFIG,
]

export const BUYFLOW_CONFIG: BuyflowConfig = {
  [ProductIds.devIns]: DEV_BUYFLOW_CONFIG,
  [ProductIds.designerIns]: DESIGNER_BUYFLOW_CONFIG,
}

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}
