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
				<div class='des-wrapper'>
					<label htmlFor='text-container'>Describe yourself briefly</label>
					<textarea onChange={updateField} id='text-field' className='text-field'></textarea>
				</div>
			</fieldset>
		);
	}
}

export default DescribeInfo;