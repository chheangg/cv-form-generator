import GeneralInfo from './generalinfo';
import DescribeInfo from './describeinfo';
import EducationInfo from './educationinfo';
import PracticalInfo from './practicalinfo';
import '../styles/form.scss';

function Form(props) {
  const {utility, educationInfo, practicalInfo} = props
  return (
    <form className='form-container'>
      <GeneralInfo updateField={utility.updateField}/>
      <DescribeInfo updateField={utility.updateField}/>
      <EducationInfo utility={utility} educationInfo={educationInfo}/>
      <PracticalInfo utility={utility} practicalInfo={practicalInfo}/>
    </form>
  )
}

export default Form;