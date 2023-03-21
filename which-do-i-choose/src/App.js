import React, { useState, Component } from 'react';
import './App.css';
import Header from './components/Header';
import Graph from './components/Graph';


/*
this.budgetAmount = 0
this.item1 = 'First Item'
this.item2 = 'Second Item'
this.item1_cost = 0
this.item2_cost = 0
*/

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      labels: Array.from({ length: 10 }, (x,i) => i),
      datasets: [{
        label: 'Possible combinations',
        data: [5,4,3,2,1,0]
      }],
      y_axis: 'First Item',
      x_axis: 'Second Item'  
    };
  }

  updateChart = event => {
    this.budgetAmount = document.getElementsByClassName('currencyinput')[0].value

    this.setState({
      datasets: [{
        // Item 1
        label: document.getElementById('item1').value,
        data: [1,2,3]
      }],
      y_axis: document.getElementById('item1').value,
      x_axis: document.getElementById('item2').value  
    })
  }
    

  render(){
    function changeCurrency() {
      const money = document.getElementById("currency-input").value;
      
      for (let i = 0; i < document.getElementsByClassName("currency").length; i++) {
        document.getElementsByClassName("currency")[i].innerHTML = money;  
        if (money === "₩"){
          document.getElementsByClassName("currency")[i].style.width = "1.4em";
        }
      }
    };
    

    //let { amount, item1, item1_cost, item2, item2_cost } = getData;
    //let x_range = calculateData(amount, item1_cost, item2_cost);
    
    // Insert dataset variable here, using useState from the video,
    // and using the data from the function getData()
    /*
    const [valueData, setValueData] = useState({
      labels: Array.from({ length: x_range }, (x,i) => i),
      datasets: [1,2,3]
    }) */
    


    return(
      <div className="wrapper">
        
        <Header />
        <div className="intro">
            This is a site that will help you decide which of two things you should choose
          and how much.
        </div>

        <div id='graph'>
            <Graph data={this.state.datasets.data} amount={this.state.labels} 
            y_axis={this.state.y_axis} x_axis={this.state.x_axis}/>
        </div>
        
        <div className="main-page">
  
          <form>
            <label>
              What currency do you use?
              <select id="currency-input" onChange={changeCurrency} defaultValue={"blank"}>
                <option disabled value="blank" alt="blank"> </option>
                <option value="$" alt="dollar">$</option>
                <option value="€" alt="euro">€</option>
                <option value="£" alt="pound">£</option>
                <option value="¥" alt="yen">¥</option>
                <option value="₹" alt="rupee">₹</option>
                <option value="₩" alt="won">₩</option>
                <option value="₽" alt="ruble">₽</option>
              </select>
            </label>
            <br/>
            <label>
              What is your budget amount?
              <label className='currency'/>
              <input className='currencyinput' type='number' placeholder='Enter an amount' onChange={this.updateChart}/>
            </label>
            <br/><br/>
  
            <label>
              What is the first thing you want to choose between?
              <input id='item1' placeholder='Enter an item' onChange={this.updateChart}/>
            </label>
            <br/>
            <label>
              What is its cost per unit?
              <label className='currency'/>
              <input className='currencyinput' type='number' placeholder='Enter the cost'  onChange={this.updateChart}/>
            </label>
            <br/><br/>
  
            <label>
              What is the second thing you want to choose between?
              <input id='item2' placeholder='Enter an item' onChange={this.updateChart}/>
            </label>
            <br/>
            <label>
              What is its cost per unit?
              <label className='currency'/><input className='currencyinput' type='number' placeholder='Enter the cost' onChange={this.updateChart}/>
            </label>
            
          </form>
  
        </div>
      </div>
    );
  }
}

export default App;
