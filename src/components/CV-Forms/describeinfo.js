import React from 'react';
import '../styles/describeinfo.scss';

class DescribeInfo extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<fieldset className='des-container'>
				<legend>Main Information</legend>
				<label htmlFor='text-container'>Describe yourself briefly</label>
				<textarea className='text-field'></textarea>
			</fieldset>
		);
	}
}

export default DescribeInfo;