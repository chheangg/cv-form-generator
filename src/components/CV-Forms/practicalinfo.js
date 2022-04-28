import PracticalInfoBox from './practicalinfobox';
import '../styles/practicalinfo.scss';

function PracticalInfo(props) {
  const {utility, practicalInfo} = props;
  return (
    <fieldset className='pract-container'>
      <legend>Work Experiences</legend>
      <div className='pra-create-container'>
        <div className='pra-create-btn'>
          <button type='button' id='prac-list' onClick={utility.createList}></button>
          <h2>ADD WORK INFO</h2>
        </div>
        {practicalInfo[0] ? practicalInfo.map(x => <PracticalInfoBox key={x.key} index={x.key} utility={utility} />) : ''}
      </div>
    </fieldset>
  )
}

export default PracticalInfo;