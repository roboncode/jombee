type Props = {
  children: React.ReactNode,
  className?: string,
}

function Content ({children, className}: Props) {
  return (
    <div className={`flex w-full h-full ${className}`}>
      {children}
    </div>
  )
}

export default Content