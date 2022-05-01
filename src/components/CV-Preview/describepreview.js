import '../styles/describepreview.scss';
import defaultPic from '../assets/default-pic.png'
function DescribePreview(props) {
	console.log(props.image);
	return (
		<div className='des-prev-container'>
			<div className='profile-container'>
					<img className='profile-img' src={(props.image) ? URL.createObjectURL(props.image) : defaultPic} alt='CV profile'></img>
			</div>
			<h1 className='big-text'>Brief Information</h1>
			<p className='main-text'>{props.briefInfo}</p>
		</div>
	)
}

export default DescribePreview;