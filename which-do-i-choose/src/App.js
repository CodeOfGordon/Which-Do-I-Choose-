import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    function changeCurrency() {
      var money = document.getElementById("currency-input").value;
      
      for (let i = 0; i < document.getElementsByClassName("currency").length; i++) {
        document.getElementsByClassName("currency")[i].innerHTML = money;  
        if (money === "₩"){
          document.getElementsByClassName("currency")[i].style.width = "1.4em";
        }
      }
    }
  
    return(
      <div className="wrapper">
        
        <Header />
  
        <div className="main-page">
          <div className="intro">
            This is a site that will help you decide which of two things you should choose
          and how much.
          </div>
          <br/><br/>
  
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
              <label className='currency'/><input className='currencyinput' type='number' placeholder='Enter an amount'/>
            </label>
            <br/><br/>
  
            <label>
              What is the first thing you want to choose between?
              <input id='item1' placeholder='Enter an item'/>
            </label>
            <br/>
            <label>
              What is its cost per unit?
              <label className='currency'/><input className='currencyinput' type='number' placeholder='Enter the cost'/>
            </label>
            <br/><br/>
  
            <label>
              What is the second thing you want to choose between?
              <input id='item2' placeholder='Enter an item'/>
            </label>
            <br/>
            <label>
              What is its cost per unit?
              <label className='currency'/><input className='currencyinput' type='number' placeholder='Enter the cost'/>
            </label>
            
          </form>
  
        </div>
      </div>
    );
  }
}


export default App;
