/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/describeinfo.scss';

class DescribeInfo extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		const {updateField} = this.props
		return (
			<fieldset className='des-container'>
				<legend>Main Information</legend>
				<label htmlFor='text-container'>Describe yourself briefly</label>
				<textarea onChange={updateField} id='text-field' className='text-field'></textarea>
			</fieldset>
		);
	}
}

export default DescribeInfo;