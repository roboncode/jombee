type Props = {
  children?: React.ReactNode
}
export const Todo = ({children}: Props) => {
  return (
    <div className="flex items-center mono text-sm font-bold p-2 gap-4">
      <span className="px-4 py-1 bg-yellow-400 dark:bg-yellow-300 drop-shadow rounded text-black">TODO</span>
      {children}
    </div>
  )
}