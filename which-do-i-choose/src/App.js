import React, { useState, Component } from 'react';
import './App.css';
import Header from './components/Header';
import Graph from './components/Graph';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      labels: Array.from({ length: 11 }, (x,i) => i),
      datasets: [{
        label: 'Possible combinations of item 2',
        data: Array.from({ length: 11 }, (x,i) => i).reverse()
      }],
      y_axis: 'First Item',
      x_axis: 'Second Item'  
    };
  };

  best(itemx, items_x, itemy, items_y){
    // Returns most optimal combination
    itemx = itemx || 'first item';
    itemy = itemy || 'second item';

    const middle = items_y.length / 2
    if(Number.isInteger(middle)){
      document.getElementById('optimal').innerHTML = 
      'Most optimal combination is ' + (items_y[middle] + ' ' + itemy + 's ' + 
      'and ' + items_x[middle] + ' ' + itemx + 's').bold();
    }
    else{
      const lower = Math.floor(middle);
      const upper = Math.ceil(middle);
      document.getElementById('optimal').innerHTML = 
      'Most optimal combination is either ' + (items_y[upper] + ' ' + itemy + 's '
      + 'and ' + items_x[upper] + ' ' + itemx + 's').bold() + '\n' +
      'or ' + (items_y[lower] + ' ' + itemy + 's ' + 
      'and ' + items_x[lower] + ' ' + itemx).bold();
    }
  }

  calculate(total_value, cost_x, cost_y){
    // Returns list of costs for x and y value
    const quant_x = parseInt(total_value / cost_x)+1
    var items_x = Array.from({ length: quant_x }, (x,i) => i)
    
    var items_y = [];
    var prev = 0;
    for(let i=0; i < (quant_x); i++){
      const amount_y = parseInt((total_value / cost_y) - (cost_x*i / cost_y));
      items_y.push(amount_y);
    };
    return [items_x, items_y];
  };

  updateChart = event => {
    // Initializing values
    const budgetAmount = document.getElementsByClassName('currencyinput')[0].value;
    const item1 = document.getElementById('item1').value;
    const item2 = document.getElementById('item2').value;
    const item1_val = document.getElementsByClassName('currencyinput')[1].value;
    const item2_val = document.getElementsByClassName('currencyinput')[2].value;
    
    const values = this.calculate(budgetAmount, item1_val, item2_val);
    const item1_values = values[0];
    const item2_values = values[1];

    // Updating values
    this.best(item1, item1_values, item2, item2_values)
    this.setState({
      labels: item1_values,
      datasets: [{
        label: 'Possible combinations of ' + item2,
        data: item2_values
      }],
      y_axis: item2,
      x_axis: item1
    })
  }
    

  render(){
    function changeCurrency() {
      const money = document.getElementById("currency-input").value;
      
      // Formatting currency
      for (let i = 0; i < document.getElementsByClassName("currency").length; i++) {
        document.getElementsByClassName("currency")[i].innerHTML = money;  
        if (money === "₩"){
          document.getElementsByClassName("currency")[i].style.width = "1.4em";
        }
      }
    };
    


    return(
      <div className="wrapper">
        
        <Header />
        <div className="intro">
            This is a site that will help you decide which of two things you should choose
          and how much.
        </div>

        <div id='graph'>
            <Graph datas={this.state.datasets} amount={this.state.labels} 
            y_axis={this.state.y_axis} x_axis={this.state.x_axis}/>
            <p id='optimal'></p>
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
              <label className='currency'/>
              <input className='currencyinput' type='number' placeholder='Enter the cost' onChange={this.updateChart}/>
            </label>
            
          </form>
  
        </div>
      </div>
    );
  }
}

export default App;
