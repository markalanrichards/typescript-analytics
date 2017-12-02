import * as React from "react"
import styled from "styled-components"

export interface IProps {
  title: string
}

const H1 = styled.h1`
  padding: 1em;
  text-align: center;
  color: cornflowerblue;
  opacity: 1;

  &:hover {
    transition: opacity 0.6s ease-in-out;
    opacity: 0.2;
  }
`

const Heading = (props: IProps) => <H1>{props.title}!</H1>

export default Heading
