/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/describepreview.scss';


function DescribePreview(props) {
	return (
		<div className='des-prev-container'>
			<h1 className='big-text'>Brief Information</h1>
			<p className='main-text'>{props.briefInfo}</p>
		</div>
	)
}

export default DescribePreview;