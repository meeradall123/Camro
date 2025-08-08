import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export type AvatarProps = PropsWithChildren<{
  src?: string
  alt?: string
  size?: number
  presence?: 'online' | 'idle' | 'dnd' | 'offline'
  className?: string
}>

const presenceColor: Record<NonNullable<AvatarProps['presence']>, string> = {
  online: 'bg-emerald-500',
  idle: 'bg-amber-400',
  dnd: 'bg-rose-500',
  offline: 'bg-zinc-500',
}

export function Avatar({ src, alt, size = 36, presence = 'online', className, children }: AvatarProps) {
  const dimension = `${size}px`
  return (
    <div className={clsx('relative inline-flex shrink-0 items-center justify-center rounded-full bg-white/10 text-sm', className)} style={{ width: dimension, height: dimension }}>
      {src ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={src} alt={alt} className="h-full w-full rounded-full object-cover" />
      ) : (
        <span className="font-medium text-white/80">{children}</span>
      )}
      <span className={clsx('absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full ring-2 ring-darkElevated', presenceColor[presence])} />
    </div>
  )
}

export default Avatar