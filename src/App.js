import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Kavya"
  const details=[
    {
      name : "Kavya",
      pic:"https://1.bp.blogspot.com/-TUa3v957y_4/YRDJpRzW6NI/AAAAAAAAM9A/W1tQHdwoYhccVEUm4L2qn_As_kf8ggI8ACLcBGAsYHQ/s540/alone-Whatsapp-Dp-Images-alone-girl-dp-Alone-Girl-Dp-For-Facebook-alone-Whatsapp-Dp-Images-sad-alone-girl-dp-alone-girl-dp%2B%25282%2529.jpg"
    },
    {
      name : "Krithika",
      pic:"https://www.attitudestatus.org/wp-content/uploads/2021/05/boy-girl-dps-1.jpg"
    },
    {
      name : "Varnika",
      pic:"https://wallpapercave.com/wp/wp5135903.jpg"
    }

  ]
  return (
    <div className="App">
      {
        details.map(person => <Message name={person.name} pic={person.pic} />)
      }
    {/* <Message name="Kavya" pic="https://1.bp.blogspot.com/-TUa3v957y_4/YRDJpRzW6NI/AAAAAAAAM9A/W1tQHdwoYhccVEUm4L2qn_As_kf8ggI8ACLcBGAsYHQ/s540/alone-Whatsapp-Dp-Images-alone-girl-dp-Alone-Girl-Dp-For-Facebook-alone-Whatsapp-Dp-Images-sad-alone-girl-dp-alone-girl-dp%2B%25282%2529.jpg" />
    <Message name="Krithika" pic="https://www.attitudestatus.org/wp-content/uploads/2021/05/boy-girl-dps-1.jpg" />
    <Message name="Varnika" pic="https://wallpapercave.com/wp/wp5135903.jpg" /> */}
  </div>
  );
}

function Message({name,pic}){
  return(
  <div>
   <img className="profile-pic" src={pic} alt={name}/>
   <h1>Hello {name}😊</h1>
  </div>
  
  );
}
export default App;


