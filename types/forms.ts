export type BaseField = {
  name: string
  label: string
  placeholder?: string
  required?: boolean
  fullWidth?: boolean
  helperText?: string
}

export type TextField = BaseField & {
  type: 'text' | 'email' | 'tel' | 'textarea' | 'date'
}

export type SelectField = BaseField & {
  type: 'select'
  options: Array<{ label: string; value: string }>
  multiple?: boolean
}

export type RadioField = BaseField & {
  type: 'radio'
  options: Array<{ label: string; value: string }>
}

export type CheckboxField = BaseField & {
  type: 'checkbox'
}

export type CheckboxGroupField = BaseField & {
  type: 'checkbox-group'
  options: Array<{ label: string; value: string }>
}

export type FormField = TextField | SelectField | RadioField | CheckboxField | CheckboxGroupField

export interface FormStep {
  title: string
  fields: FormField[]
}
