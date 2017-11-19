import * as React from "react"
import { configure, shallow, ShallowWrapper, HTMLAttributes } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({
  adapter: new Adapter()
})

import { Index } from "../../src/components/Index"

let index

beforeEach(
  () => (index = shallow(<Index compiler="TypeScript" framework="React" />))
)

it("should render without error", () => expect(index.length).toBe(1))

it("should render paragraph for each item that has been passed through props", () => {
  const h1Nodes: ShallowWrapper<HTMLAttributes, undefined> = index.find("h1")
  expect(h1Nodes.length).toBe({ items: [1] }.items.length)
})
