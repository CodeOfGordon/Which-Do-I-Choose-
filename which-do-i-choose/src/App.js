import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
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
            <select>
              <option value="dollar">$</option>
              <option value="euro">€</option>
              <option value="pound">£</option>
              <option value="yen">¥</option>
              <option value="rupee">₹</option>
              <option value="won">₩</option>
              <option value="ruble">₽</option>
            </select>
          </label>
          <br/>
          <label>
            What is your budget amount? <input type="number"></input>
          </label>
          <br/><br/>

          <label>
            What is the first thing you want to choose between?
          </label>
          <br/>
          <label>
            What is its cost per unit?
          </label>
          <br/><br/>

          <label>
            What is the second thing you want to choose between?
          </label>
          <br/>
          <label>
            What is its cost per unit?
          </label>
          
        </form>

      </div>
    </div>
  );
}


export default App;
