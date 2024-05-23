import { useState } from 'react';

import Tabs from '../Tabs/Tabs';
import EyesSelector from '../EyesSelector/EyeSelector';
import MouthSelector from '../MouthSelector/MouthSelector';
import ColorSelector from '../ColorSelector/ColorSelector';

const tabNames:string[] = [
	'Oči',
	'Ústa',
	'Barva'
];

const Configurator:React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabChange = (newActiveTab:number) => {
		setActiveTab(newActiveTab);
	}

	return (
		<div className="configurator">
			<Tabs tabNames={tabNames} activeTab={activeTab} onTabChange={handleTabChange} />

			{activeTab === 0 && <EyesSelector /> }
			{activeTab === 1 && <MouthSelector /> }
			{activeTab === 2 && <ColorSelector /> }
		</div>
	);
}

export default Configurator;