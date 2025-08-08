import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export type PageProps = PropsWithChildren<{
  className?: string
}>

export function Page({ children, className }: PageProps) {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
      transition={{ type: 'spring', mass: 0.6, damping: 18, stiffness: 180 }}
    >
      {children}
    </motion.main>
  )
}

export default Page