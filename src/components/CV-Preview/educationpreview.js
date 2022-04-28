import '../styles/educationpreview.scss'
import EducationPreviewBox from './educationpreviewbox';

function EducationPreview(props) {
  const {educationInfo} = props;
  return (
    <div className='edu-prev-container'>
      <h1 className='big-text'>Education Background</h1>
      {educationInfo[0] ? educationInfo.map(x => <EducationPreviewBox info={x} key={x.key}/>) : ''}
    </div>
  )
}

export default EducationPreview;