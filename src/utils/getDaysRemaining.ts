export function getDaysRemaining(targetDateString: string): string {
  const targetDate = new Date(targetDateString)
  const now = new Date()

  const msInDay = 1000 * 60 * 60 * 24
  const diffMs = targetDate.getTime() - now.getTime()
  const daysRemaining = Math.ceil(diffMs / msInDay)

  if (daysRemaining < 0) {
    return 'Expired'
  }

  return `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''}`
}
