import React from 'react'
import { Link } from 'react-router';

const InstructionForm = (props) => {
  return(
    <form onSubmit={props.handleInstructionSubmit}>
      <label>Add step</label>
      <input type="text" value={props.newInstruction} onChange={props.handleStepChange}/>
      <div className="small-offset-4">
        <input className="button" type="submit" value="Add"/>
      </div>
    </form>
  )
}

export default InstructionForm;
