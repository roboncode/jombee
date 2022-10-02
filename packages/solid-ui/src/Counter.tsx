import { createSignal } from "solid-js"
import { noShadowDOM } from "solid-element"

export const Counter = (props: { name: string }) => {
  const [count, setCount] = createSignal(0)
  noShadowDOM()
  // const merged = mergeProps({ name: 'John' }, props)

  return (
    <>
      <h1>Hello, {props.name || 'world'} from Solid.js!</h1>
      <button onClick={() => setCount(count() + 1)}>Solid Count: {count()}</button>
    </>
  )
}
