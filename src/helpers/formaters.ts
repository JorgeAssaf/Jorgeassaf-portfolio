import { format } from 'date-fns'

export class Formaters {
  static formatDate(date: Date | string | number, Pattern = 'PPPP'): string {
    return format(new Date(date), Pattern)
  }
  static capitalizeFirstLetter(string: string | string[]): string {
    if (string.length === 0) return ''
    if (Array.isArray(string)) string = string.join('')
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
