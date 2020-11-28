import './App.css';
import beerpic from './media/rootbeerpic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalNav from './Components/GlobalNav'
import {useState} from 'react'
import InputPanel from './Components/InputPanel';
import {Button} from 'react-bootstrap'
import Recipe from './Components/Recipe'

var selectedIce = [];

function App(){  
  const [isOkay, setOkay] = useState(false);
  const [sodaSelected, setSoda] = useState("");
  const [amount, setAmount] = useState(0);  
  const IceCreams = [
    {
        id: "Vanilla",
        isChecked: false 
    },
    {
        id: "Cocolate",
        isChecked: false 
    },
    {
        id: "Coffee",
        isChecked: false 
    }
  ];

  const Sodas = [
    {
        id: "Barq's",
        isChecked: false 
    },
    {
        id: "A&W",
        isChecked: false 
    },
    {
        id: "Dad's",
        isChecked: false 
    },
    {
      id: "IBC",
      isChecked: false 
    }
  ];
  
  const displayError = () =>{
    alert("You must select at least one ice cream flavor and one root beer brand")
    setOkay(false);
  }

  const updateArray = (array) =>{
    selectedIce = array;
  }

  const increase = () =>{
    setAmount(amount+1);
  }

  const makeSure = () =>{
    var temp = [];
    selectedIce.forEach(element => {
      if(element === null){

      }else{
        temp.push(element);
      }
    });
    selectedIce = temp;
    
    if(selectedIce.length<2){
      displayError();
      setOkay(false);
    }else if(sodaSelected === ""){
      setOkay(false);
      displayError();
    }else{
      setOkay(true);
      console.log("Okay we good");
    }
  }

  return(
      <div>
        <GlobalNav amount = {amount}></GlobalNav>
        <div class="container-lg m-auto p-3">
          <div class="row">
            <div class="col-md">
              <img src = {beerpic} className = "img-fluid" alt = "Missing..."></img>
            </div>
            <div class="col-md text-center">
              <div class = "container-sm m-auto">
                <div class = "row m-auto p-3">
                  <div class="col-sm border border-black p-1">
                    <h3>Ice Creams</h3>
                    <InputPanel sodaValue = {setSoda} setIces = {updateArray} item = {IceCreams} type = "Ice" changeOk = {setOkay}></InputPanel>
                  </div>
                  <div class="col-sm border border-black p-1">
                    <h3>Root Beers</h3>
                    <InputPanel sodaValue = {setSoda} setIces = {updateArray} item = {Sodas} type = "Soda" changeOk = {setOkay}></InputPanel>
                  </div>
                </div>
                <br></br>
                <br></br>
                <Button color = "info" onClick ={makeSure}>I am so ready to make this root beer float</Button>
                <br></br>
                <br></br>
                <Recipe canShow = {isOkay} soda = {sodaSelected} ices = {selectedIce} addBeer = {increase}></Recipe>
              </div>
            </div>
          </div>
        </div>   
      </div> 
    );
  }
export default App;
