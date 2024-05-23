import Emoticon from './components/Emoticon/Emoticon'
import Configurator from './components/Configurator/Configurator';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Vytvoř si vlastní emotikon</h1>
      </header>
      <main>
        <Emoticon />
        <Configurator />
      </main>
    </div>
  )
}

export default App
