import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl',
    'text-sm font-semibold tracking-wide',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.97]',
  ].join(' '),
  {
    variants: {
      variant: {
        default:  'bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:from-violet-700 hover:to-purple-600 shadow-sm hover:shadow-md hover:shadow-violet-200',
        outline:  'border-2 border-violet-600 text-violet-600 bg-transparent hover:bg-violet-50',
        ghost:    'text-stone-600 hover:bg-stone-100 hover:text-stone-900',
        subtle:   'bg-stone-100 text-stone-700 hover:bg-stone-200',
        link:     'text-violet-600 underline-offset-4 hover:underline h-auto p-0 font-medium',
        linkedin: 'bg-[#0A66C2] text-white hover:bg-[#004182] shadow-sm hover:shadow-md',
        danger:   'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm:      'h-9 px-4 text-xs',
        default: 'h-11 px-6',
        lg:      'h-12 px-8 text-base',
        icon:    'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = forwardRef(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
))
Button.displayName = 'Button'

export { Button, buttonVariants }