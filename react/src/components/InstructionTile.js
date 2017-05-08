import React from 'react';
import { Link } from 'react-router'

const InstructionTile = (props) => {
  return (
    <li>({props.stepNumber}) {props.step}</li>
  )
}

export default InstructionTile
