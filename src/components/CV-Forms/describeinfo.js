import '../styles/describeinfo.scss';
import ImageUploader from './uploadImage';

function DescribeInfo(props) {
	const {updateField} = props
	return (
		<fieldset className='des-container'>
			<legend>Main Information</legend>
			<div className='des-wrapper'>
				<label htmlFor='text-container'>Describe yourself briefly</label>
				<textarea onChange={updateField} id='text-field' className='text-field'></textarea>
				<ImageUploader setImage={props.setImage} />
			</div>
		</fieldset>
	);
}

export default DescribeInfo;