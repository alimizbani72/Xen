export const getFontValue = (
  fontSize: number | Partial<Record<'xs' | 'md' | 'sm' | 'lg' | 'xl', number | string>> = 20,
  fontWeight: number = 500,
) => {
  return {
    fontSize,
    fontWeight,
    fontStyle: 'normal',
    lineHeight: 'normal',
  }
}
