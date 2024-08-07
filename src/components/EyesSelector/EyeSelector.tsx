import { eyesData, Eyes } from '../../data';
import { useSettings } from '../../setting-context';

const EyesSelector: React.FC = () => {
  const { eyes, changeId } = useSettings();

  const handleClick = (item: Eyes) => {
    changeId('eyes', item.id);
  };

  return (
    <div className="items">
      {eyesData.map((eye) => (
        <img
          className={eye.id === eyes ? 'item active' : 'item'}
          key={eye.id}
          src={eye.image}
          onClick={() => {
            handleClick(eye);
          }}
        />
      ))}
    </div>
  );
};

export default EyesSelector;
