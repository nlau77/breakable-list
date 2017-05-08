import React from 'react'
import { Link } from 'react-router';

const InstructionForm = (props) => {
  return(
    <form onSubmit={props.handleInstructionSubmit}>
      <label>Add step</label>
      <input type="text" value={props.newInstruction} onChange={props.handleStepChange}/>
      <input type="submit" value="+"/>
    </form>
  )
}

export default InstructionForm;
