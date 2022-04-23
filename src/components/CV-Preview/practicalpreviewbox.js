function PracticalPreviewBox(props) {
  const {info} = props
  return (
    <div className='prac-prev-box'>
      <h2 className='title big-text'>
        {info.name}
      </h2>
      <p className='role text'>
        {info.role}
      </p>
      <p className='timeframe text'>
        {info.from} - {info.to}
      </p>
    </div>
  )
}

export default PracticalPreviewBox;