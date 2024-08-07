import { useState } from 'react';
import Emoticon from './components/Emoticon/Emoticon';
import Configurator from './components/Configurator/Configurator';
import { SettingContext, SettingData } from './setting-context';

const App = () => {
  const [settings, setSettings] = useState<SettingData>({
    eyes: 2,
    mouth: 2,
    color: 3,
  });

  const changeId = (value: string, id: number) => {
    setSettings((prevSettings) => ({ ...prevSettings, [value]: id }));
  };

  return (
    <div className="container">
      <SettingContext.Provider value={{ ...settings, changeId }}>
        <header>
          <h1>Vytvoř si vlastní emotikon</h1>
        </header>
        <main>
          <Emoticon />
          <Configurator />
        </main>
      </SettingContext.Provider>
    </div>
  );
};

export default App;
