export const tokenExpirationStatus = (expires_in: string): boolean => {
  const currentTime = Date.now()
  const twoHoursInMillis = 0
  const adjustedTime = currentTime + twoHoursInMillis

  return adjustedTime >= +expires_in
}
