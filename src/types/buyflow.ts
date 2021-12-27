import { ComponentType } from 'react'

export enum ProductIds {
  devIns = 'dev_ins',
  designerIns = 'designer_ins',
}

export enum BuyflowSteps {
  AgeStep = 'age',
  EmailStep = 'email',
  NameStep = 'name',
  SummaryStep = 'summary',
}

export interface BuyflowStep {
  key: BuyflowSteps
  component: ComponentType<any>
}

export type BuyflowConfig = {
  [key in ProductIds]: BuyflowStep[]
}
