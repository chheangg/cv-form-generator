/* eslint-disable no-useless-constructor */
import React from 'react';
import '../styles/generalpreview.scss';

class GeneralPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='gen-prev-container'>
				<h1 className='main-name'>{this.props.user.firstName}<br></br>{this.props.user.lastName}</h1>
				<p className='title'>{this.props.user.title}</p>
				<div className='divider'>Personal Info</div>
				<h2 className='label'>Age</h2>		
				<p className='age'>{this.props.user.age}</p>
				<h2 className='label'>Email</h2>
				<p className='text'>{this.props.user.email}</p>
				<h2 className='label'>Contact</h2>
				<p className='text'>{this.props.user.contact}</p>
				<h2 className='label'>Address</h2>
				<p className='text'>{this.props.user.address}</p> 
		</div>
		)
	}
}

export default GeneralPreview;