import * as React from "react"
import { configure, shallow, ShallowWrapper, HTMLAttributes } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-styled-components"
import * as renderer from "react-test-renderer"

configure({
  adapter: new Adapter()
})

import Heading from "./Heading"

let heading: any

beforeAll(() => (heading = renderer.create(<Heading title="TypeScript" />)))

it("should render Heading with title", () => {
  expect(heading.toJSON()).toMatchSnapshot()
})
it("Snapshot is correct", () => {
  expect(heading.toJSON()).toHaveStyleRule("color", "cornflowerblue")
})
