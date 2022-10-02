// !!!! https://www.youtube.com/watch?v=x9yUwiNtzBs

import '@jombee/solid-ui'
import '@jombee/lit-ui'
import '@jombee/svelte-ui'

import { SlButton, SlDivider, SlDropdown, SlIcon, SlMenu, SlMenuItem } from '@shoelace-style/shoelace/dist/react'

import { Container } from '../components/core/Container'
import { useState } from 'react'

function Test() {
  const [selectedItem, setSelectedItem] = useState<string>('Dropdown')
  const [name, setName] = useState<string>('world')

  function handleSelect(event: Event) {
    const val = (event as CustomEvent).detail.item.value
    // console.log(item)
    setSelectedItem(val)
  }

  return (
    <div className="dark">
      <div className="sl-theme-dark w-screen h-screen bg-base color-base p-8">
        <h1>Test Page</h1>
        {/* <div>
          Raw: <MyElement />
        </div> */}
        <SlButton onClick={() => setName('Rob')}>Change name: Rob</SlButton>

        <div className="border border-base rounded-lg p-4 m-4">
          <lit-counter name={name} class="block font-bold p-4 bg-shade rounded-md" />
        </div>

        <div className="border border-base rounded-lg p-4 m-4">
          <solid-counter name={name} class="block font-bold p-4 bg-shade rounded-md" />
        </div>

        <div className="border border-base rounded-lg p-4 m-4">
          <svelte-counter name={name} class="block font-bold p-4 bg-shade rounded-md" />
        </div>

        <Container className="w-100 h-50 bg-shade p-4 rounded-lg overflow-y-auto">
          <SlDropdown className="sticky top-0" hoist>
            <SlButton slot="trigger" caret>
              {selectedItem}
            </SlButton>
            <SlMenu onSlSelect={handleSelect}>
              <SlMenuItem value={JSON.stringify({ 'label:': 'Drop 1', value: 'here i am' })}>
                Dropdown Item 1
              </SlMenuItem>
              <SlMenuItem>Dropdown Item 2</SlMenuItem>
              <SlMenuItem>Dropdown Item 3</SlMenuItem>
              <SlDivider />
              <SlMenuItem checked>Checked</SlMenuItem>
              <SlMenuItem disabled>Disabled</SlMenuItem>
              <SlDivider />
              <SlMenuItem>
                Prefix
                <SlIcon slot="prefix" name="gift" />
              </SlMenuItem>
              <SlMenuItem>
                Suffix Icon
                <SlIcon slot="suffix" name="heart" />
              </SlMenuItem>
            </SlMenu>
          </SlDropdown>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
          <div>sdafasdf</div>
        </Container>
      </div>
    </div>
  )
}

export default Test
