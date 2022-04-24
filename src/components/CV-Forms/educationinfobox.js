function EducationInfoBox(props) {
    const {utility} = props;
  return (
    <div className='edu-create-box'>
      <label htmlFor='school'>School</label>
      <input type='text' onChange={utility.updateList} data-key={props.index} id='name' className='education-input'></input>
      <label htmlFor='school-title'>Title</label>
      <input type='text' onChange={utility.updateList} data-key={props.index} id='role' className='education-input'></input>
      <label htmlFor='from'>From</label>
      <input type='date' onChange={utility.updateList} data-key={props.index} id='from' className='education-input'></input>    
      <label htmlFor='to'>To</label>
      <input type='date' onChange={utility.updateList} data-key={props.index} id='to' className='education-input'></input>
      <button type='button' data-key={props.index} className='education-input' id='delete' onClick={utility.deleteList}></button>            
  </div>
  )
}

export default EducationInfoBox;