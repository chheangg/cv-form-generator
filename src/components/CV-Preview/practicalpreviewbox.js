function PracticalPreviewBox(props) {
  const {info} = props
  return (
    <div className='prac-prev-box'>
      <h2 className='title'>
        {info.name}
      </h2>
      <p className='timeframe text'>
        {info.from} - {info.to}
      </p>
      <p className='role text'>
        {info.role}
      </p>
    </div>
  )
}

export default PracticalPreviewBox;