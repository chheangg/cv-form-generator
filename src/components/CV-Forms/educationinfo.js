import EducationInfoBox from './educationinfobox';
import '../styles/educationinfo.scss';
import addIcon from '../assets/shape-square-plus.png'

function EducationInfo(props) {
  const {utility, educationInfo} = props;
  const style = {
    backgroundImage: `url(${addIcon})`,
    backgroundColor: '#dc2626',
    backgroundSize: 'contain',
    height: '36px',
    width: '36px',
  }
  return (
    <fieldset className='edu-container'>
      <legend>Educational Experiences</legend>
      <div className='edu-create-container'>
        <div className='edu-create-btn'>
          <button type='button' onClick={utility.createList} style={style} id='edu-list' className='edu-create'></button>
          <h2>ADD EDUCATION INFO</h2>
        </div>
        {educationInfo[0] ? educationInfo.map(x => <EducationInfoBox key={x.key} index={x.key} utility={utility} />) : ''}
      </div>
    </fieldset>
  )
}

export default EducationInfo;