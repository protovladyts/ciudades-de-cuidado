interface GradientUnderlineProps {
  children: React.ReactNode
  className?: string
}

export function GradientUnderline({ children, className = '' }: GradientUnderlineProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F]" />
    </div>
  )
}