import './style.css';
import { useMemo } from 'react';
import { useSettings } from '../../setting-context';
import { eyesData, mouthData, colorsData } from '../../../src/data';

const Emoticon: React.FC = () => {
  const { eyes, mouth, color } = useSettings();

  const handleEyes = useMemo(
    () => eyesData.find((item) => item.id === eyes)?.image,
    [eyes],
  );
  const handleMouth = useMemo(
    () => mouthData.find((item) => item.id === mouth)?.image,
    [mouth],
  );
  const handleColor = useMemo(
    () => colorsData.find((item) => item.id === color)?.value,
    [color],
  );

  return (
    <div className="emoticon" style={{ backgroundColor: handleColor }}>
      <img className="emoticon__eyes" src={handleEyes} />
      <img className="emoticon__mouth" src={handleMouth} />
    </div>
  );
};

export default Emoticon;
