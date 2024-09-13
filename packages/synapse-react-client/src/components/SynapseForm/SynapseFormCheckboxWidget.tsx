import React from 'react'
import { Widgets } from '@rjsf/mui'
import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils'

// See PORTALS-3246
export default function SynapseFormCheckboxWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  return <Widgets.CheckboxWidget {...props} hideLabel />
}
