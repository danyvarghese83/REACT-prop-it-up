import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (

    <div className="container">
      <div className="card">
        <div className="card-header bg-dark text-light">Person Card</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">List:</li>
                <PersonCard firstName={"Jane"}/>
                <PersonCard lastName={"Doe"}/>
                <PersonCard age={ 45 } />
                <PersonCard hairColor={ "Black" } />

                <PersonCard firstName={"John"}/>
                <PersonCard lastName={"Doe"}/>
                <PersonCard age={ 40 } />
                <PersonCard hairColor={ "Blonde" } />

                <PersonCard firstName={"John Smith"}/>
                <PersonCard lastName={"Wan"}/>
                <PersonCard age={ 25 } />
                <PersonCard hairColor={ "Brunete" } />

                <PersonCard firstName={"Wesson"}/>
                <PersonCard lastName={"Wan"}/>
                <PersonCard age={ 20 } />
                <PersonCard hairColor={ "Black" } />
            </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
