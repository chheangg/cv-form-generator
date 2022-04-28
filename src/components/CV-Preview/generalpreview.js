import '../styles/generalpreview.scss';

function GeneralPreview(props) {
	return (
		<div className='gen-prev-container'>
			<h1 className='main-name'>{props.user.firstName}<br></br>{props.user.lastName}</h1>
			<p className='title'>{props.user.title}</p>
			<div className='divider'>Personal Info</div>
			<h2 className='label'>Age</h2>		
			<p className='age'>{props.user.age}</p>
			<h2 className='label'>Email</h2>
			<p className='text'>{props.user.email}</p>
			<h2 className='label'>Contact</h2>
			<p className='text'>{props.user.contact}</p>
			<h2 className='label'>Address</h2>
			<p className='text'>{props.user.address}</p> 
		</div>
	)
}

export default GeneralPreview;