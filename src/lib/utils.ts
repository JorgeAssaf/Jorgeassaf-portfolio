import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugify = (text: string | undefined) => {
  return text === undefined
    ? ''
    : text
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-') // remove consecutive hyphens
}

export const deslugify = (text: string) => {
  return text
    .toString()
    .replace(/-/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/^[a-z]/g, (m) => m.toUpperCase())
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
}
