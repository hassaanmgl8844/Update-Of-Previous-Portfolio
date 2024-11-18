import './App.css';
import "@mantine/core/styles.css";
import HomePage from './Components/HomePage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
    <HomePage />
    </MantineProvider>
  );
}

export default App;
