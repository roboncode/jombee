type Props = {
  className?: string,
  children?: React.ReactNode,
}
export const Container = ({className, children}: Props) => {
  const cls = `flex flex-col overflow-hidden ${className}`
  return (
    <div className={cls}>
      <div className="flex flex-col flex-grow h-0 overflow-auto">
        {children}
      </div>
    </div>
  );
};
