'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'

export const FramerDiv = m.div
export const FramerSection = m.section
export const FramerH2 = m.h2

export const FramerWrapper = ({ children }: React.PropsWithChildren) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
