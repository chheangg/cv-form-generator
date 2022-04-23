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
				<h1 className='title'>Brief Information</h1>
				<p className='main-text'>
					Having over twenty repositories on github, despite been a high school student.
					Chheang is determined to study CS and learn all of its nuances and quarks to the
					full extent. I'm currently learning the expertise of system administration, networking,
					web development, and many more!
				</p>
		</div>
		)
	}
}

export default DescribePreview;