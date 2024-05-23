import {mouthData, Mouth} from '../../data';

const MouthSelector:React.FC = () => {

	const handleClick = (item:Mouth) => {
		console.log('mouth', item.id);
	}

	return (
		<div className="items">
			{mouthData.map(mouth =>
				<img
					className='item'
					key={mouth.id}
					src={mouth.image}
					onClick={() => { handleClick(mouth) }}
					/>
			)}
		</div>
	);
}

export default MouthSelector;