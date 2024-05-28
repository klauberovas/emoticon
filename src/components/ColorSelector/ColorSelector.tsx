import { Color, colorsData } from '../../data';
import { useSettings } from '../../setting-context';

const ColorSelector: React.FC = () => {
  const { color, changeId } = useSettings();

  const handleClick = (item: Color) => {
    changeId('color', item.id);
  };

  return (
    <div className="items">
      {colorsData.map((item) => (
        <div
          className={item.id === color ? 'item active' : 'item'}
          key={item.id}
          style={{ backgroundColor: item.value }}
          onClick={() => {
            handleClick(item);
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
