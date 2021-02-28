import Comp2 from './Comp2';

function App() {
  var message = 'Hello From Comp1 from JS File';
  var person = {
    "fname": "Lowell",
    "lname": "Flamme",
    "tel": "(925)313-3374",
    "address": "2838 Tincidunt Ave",
    "city": "Arvada",
    "state": "MD",
    "zip": 41213
  }
  return (
    <div className="container">
      <Comp2 msg={message} user={person} />
    </div>
  );
}

export default App;
