import * as React from "react"
import * as ReactDOM from "react-dom"
import { Index } from "../components/Index"
import Heading from "../components/Heading/Heading"

ReactDOM.render(
  <div>
    <Index compiler="TypeScript" framework="React" />
    <Heading title="Styled Component" />
  </div>,
  document.getElementById("__rootapp__")
)
