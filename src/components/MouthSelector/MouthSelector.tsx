import { mouthData, Mouth } from '../../data';
import { useSettings } from '../../setting-context';

const MouthSelector: React.FC = () => {
  const { mouth, changeId } = useSettings();

  const handleClick = (item: Mouth) => {
    changeId('mouth', item.id);
  };

  return (
    <div className="items">
      {mouthData.map((item) => (
        <img
          className={item.id === mouth ? 'item active' : 'item'}
          key={item.id}
          src={item.image}
          onClick={() => {
            handleClick(item);
          }}
        />
      ))}
    </div>
  );
};

export default MouthSelector;
