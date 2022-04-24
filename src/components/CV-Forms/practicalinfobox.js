function PracticalInfoBox(props) {
  const {utility} = props;
  return (
    <div className='pra-create-box' data-key={props.index}>
      <label htmlFor='work'>Workplace</label>
      <input type='text' onChange={utility.updateList} data-key={props.index} id='name' className='practical-input'></input>
      <label htmlFor='work-title'>Title</label>
      <input type='text' onChange={utility.updateList} data-key={props.index} id='role' className='practical-input'></input>
      <label htmlFor='from'>From</label>
      <input type='date' onChange={utility.updateList} data-key={props.index} id='from' className='practical-input'></input>    
      <label htmlFor='to'>To</label>
      <input type='date' onChange={utility.updateList} data-key={props.index} id='to' className='practical-input'></input>  
      <button type='button' data-key={props.index} className='practical-input' id='delete' onClick={utility.deleteList}></button>         
    </div>
  )
}

export default PracticalInfoBox;