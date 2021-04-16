import logo from './logo.svg';
import './App.css';
import { CRUD } from './CRUD';
import Parent from './Parent';
import { Main } from './Main';
import { UserProvider } from './UseContext';

function App() {
  return (
    <div className="App">
      {/* <CRUD /> */}
      {/* <Parent /> */}
      <UserProvider value={{ msg: "Hello for Conetext in APP Component" }}>
        <Main />
      </UserProvider>
    </div >
  );
}

export default App;
