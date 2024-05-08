
import { format } from 'date-fns'

export class Formaters {
  static formatDateTime(date: Date | string | number, Pattern = 'PPPP'): string {
    return format(new Date(date), Pattern)
  }
}