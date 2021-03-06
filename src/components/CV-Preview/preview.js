import '../styles/preview.scss';
import GeneralPreview from './generalpreview';
import DescribePreview from './describepreview';
import EducationPreview from './educationpreview';
import PracticalPreview from './practicalpreview';

function Preview(props) {
  const {generalInfo, briefInfo, educationInfo, practicalInfo, image} = props;
  console.log(practicalInfo)
  return (
    <div className='preview-container'>
      <GeneralPreview user={generalInfo}/>
      <DescribePreview briefInfo={briefInfo} image={image}/>
      <EducationPreview educationInfo={educationInfo}/>
      <PracticalPreview practicalInfo={practicalInfo}/>
    </div>
  )
}

export default Preview;