import {eyesData, Eyes} from '../../data';

const EyesSelector:React.FC = () => {

	const handleClick = (item:Eyes) => {
		console.log('eyes', item.id);
	}

	return (
		<div className="items">
			{eyesData.map(eyes =>
				<img
					className='item'
					key={eyes.id}
					src={eyes.image}
					onClick={() => { handleClick(eyes) }}
					/>
			)}
		</div>
	);
}

export default EyesSelector;