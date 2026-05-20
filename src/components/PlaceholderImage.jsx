import { Camera } from 'lucide-react'
import { cn } from '../lib/utils'

export default function PlaceholderImage({
  className,
  label = 'Add your photo here',
  rounded = false,
  iconSize = 'md',
}) {
  const iconClass = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[iconSize]

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-3 overflow-hidden',
        'bg-gradient-to-br from-stone-100 to-stone-200',
        'border-2 border-dashed border-stone-300',
        rounded ? 'rounded-full' : 'rounded-2xl',
        className
      )}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #78716C 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 select-none pointer-events-none">
        <Camera className={cn(iconClass, 'text-stone-400')} strokeWidth={1.5} />
        {label && (
          <p className="text-[11px] font-medium text-stone-400 text-center px-4 leading-snug max-w-[140px]">
            {label}
          </p>
        )}
      </div>
    </div>
  )
}