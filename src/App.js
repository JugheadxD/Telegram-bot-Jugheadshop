import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/Header';
import './App.css';

function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
      tg.ready();
    }, [])

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
