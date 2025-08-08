import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export type GlassCardProps = PropsWithChildren<{
  className?: string
}>

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
        'ring-1 ring-black/5',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default GlassCard