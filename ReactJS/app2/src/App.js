import Comp2 from './Comp2';
import Comp3 from './Comp3'
import Comp4 from './Comp4';
import Comp5 from './Comp5';
import Comp6 from './Comp6';
import Comp1 from './Comp1'
function App() {
  var message = 'Hello From app.JS File';
  var person = {
    "fname": "Lowell",
    "lname": "Flamme",
    "tel": "(925)313-3374",
    "address": "2838 Tincidunt Ave",
    "city": "Arvada",
    "state": "MD",
    "zip": 41213
  }
  var allUsers = [
    {
      "fname": "Braulio",
      "lname": "Culp",
      "tel": "(609)615-0543"
    },
    {
      "fname": "Wenjie",
      "lname": "Armstrong",
      "tel": "(771)917-4231"
    },
    {
      "fname": "Steven",
      "lname": "Morrow",
      "tel": "(412)472-3791"
    },
    {
      "fname": "Ty",
      "lname": "Leon",
      "tel": "(627)885-5548"
    },
    {
      "fname": "Edith",
      "lname": "Pace",
      "tel": "(252)464-9931"
    },
    {
      "fname": "Sunil",
      "lname": "Antunes",
      "tel": "(238)032-0551"
    },
    {
      "fname": "Monica",
      "lname": "Sundell",
      "tel": "(558)431-9202"
    },
    {
      "fname": "Geoff",
      "lname": "Rock",
      "tel": "(533)414-7251"
    },
    {
      "fname": "Curtis",
      "lname": "Warner",
      "tel": "(152)977-6589"
    },
    {
      "fname": "Rob",
      "lname": "Wuertz",
      "tel": "(140)407-5142"
    }
  ]
  return (
    <div className="container">
      {/* <Comp1 /> */}
      {/* <Comp2 msg={message} user={person} /> */}
      {/* <Comp3 msg={message} user={person} allUsers={allUsers} /> */}
      {/* <Comp4 />
      <Comp5 /> */}
      {/* <Comp6 /> */}
    </div>
  );
}

export default App;
