import React from 'react';
import '../styles/generalpreview.scss';

class GeneralPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='gen-prev-container'>
				<h1 className='main-name'>LY EANG CHHEANG</h1>
				<p className='age'>26</p>
				<h2 className='label'>Email</h2>
				<p classname='text'>lyeangchheang@gmail.com</p>
				<h2 className='label'>Contact</h2>
				<p className='text'>+855 69980981</p>
				<h2 className='label'>Address</h2>
				<p className='text'>#88B St.134</p> 
		</div>
		)
	}
}

export default GeneralPreview;