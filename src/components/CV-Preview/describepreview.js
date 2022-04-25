/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/describepreview.scss';

class DescribePreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='des-prev-container'>
				<h1 className='big-text'>Brief Information</h1>
				<p className='main-text'>{this.props.briefInfo}</p>
		</div>
		)
	}
}

export default DescribePreview;