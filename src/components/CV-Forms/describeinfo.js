import '../styles/describeinfo.scss';

function DescribeInfo(props) {
	const {updateField} = props
	return (
		<fieldset className='des-container'>
			<legend>Main Information</legend>
			<div className='des-wrapper'>
				<label htmlFor='text-container'>Describe yourself briefly</label>
				<textarea onChange={updateField} id='text-field' className='text-field'></textarea>
			</div>
		</fieldset>
	);
}

export default DescribeInfo;