import { useCallback } from 'react'
import { FieldValues, Resolver } from 'react-hook-form'
import { AnyObjectSchema, ValidationError } from 'yup'

export const useYupValidationResolver = <TFieldValues extends FieldValues>(
  validationSchema: AnyObjectSchema,
): Resolver<TFieldValues> => {
  return useCallback<Resolver<TFieldValues>>(
    async data => {
      try {
        const values = (await validationSchema.validate(data, {
          abortEarly: false,
        })) as TFieldValues

        return { values, errors: {} }
      } catch (err) {
        const yupError = err as ValidationError

        const errors = yupError.inner.reduce<Record<string, any>>(
          (allErrors, currentError) => ({
            ...allErrors,
            [currentError.path!]: {
              type: currentError.type ?? 'validation',
              message: currentError.message,
            },
          }),
          {},
        )

        return { values: {} as TFieldValues, errors }
      }
    },
    [validationSchema],
  )
}
