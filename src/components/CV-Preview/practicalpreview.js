import '../styles/practicalpreview.scss';
import PracticalPreviewBox from './practicalpreviewbox';

function PracticalPreview(props) {
  const {practicalInfo} = props;
  return (
    <div className='pra-prev-container'>
      <h1 className='big-text'>
        Work experiences
      </h1>
      {practicalInfo[0] ? practicalInfo.map(x => <PracticalPreviewBox info={x} key={x.key}/>) : '' }
    </div>
  )
}

export default PracticalPreview;