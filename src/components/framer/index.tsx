'use client'

import { domAnimation, LazyMotion } from 'motion/react'
import * as m from 'motion/react-m'

export const FramerDiv = m.div
export const FramerSection = m.section
export const FramerH2 = m.h2

export const FramerWrapper = ({ children }: React.PropsWithChildren) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
