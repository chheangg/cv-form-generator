function EducationPreviewBox(props) {
  const {info} = props
  return (
    <div className='edu-prev-box'>
      <h2 className='title big-text'>{info.name}</h2>
      <p className='timeframe text'>{info.from}-{info.to}</p>
      <p className='role text'>{info.role}</p>
    </div>
  )
}

export default EducationPreviewBox;