import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:   'bg-stone-900 text-white border border-transparent',
        secondary: 'bg-stone-100 text-stone-600 border border-transparent',
        outline:   'border border-stone-300 text-stone-700 bg-transparent',
        purple:    'bg-amber-50 text-black border border-stone-300',
        stone:     'bg-stone-100 text-stone-600 border border-stone-200',
        green:     'bg-emerald-50 text-emerald-700 border border-emerald-200',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }