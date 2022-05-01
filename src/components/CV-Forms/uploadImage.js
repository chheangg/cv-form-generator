const ImageUploader = (props) => {
  const {setImage} = props;
  return (
    <div className='upload-container'>
      <label htmlFor='upload-image'>Upload Profile Picture</label>
      <input
        id='upload-image'
        type='file'
        name='profileImage'
        onChange={(e) => {
          setImage(e.target.files[0])
          console.log(e.target.files[0])
        }}
      ></input>
    </div>
  )
}

export default ImageUploader;