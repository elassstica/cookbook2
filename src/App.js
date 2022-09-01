import './App.css';
import BlogList from '../components/BlogList.js';
import React from 'react';


class App extends React.Component {

  axios 
    .get(`https://preview.contentful.com/spaces/6did8bhz0z37/environments/master/entries?access_token=kGj7JMivsAvCApuLy8ILXUYSq0pjNUmorIhF1-FztxA`)
    .then((response) => {console.log(response.data)})
    .catch((err) => console.log(err));

  render () {
    return (
      <div className="App">
        <div className="Container">
          <header>
            <div className="wrapper">
              <span>React and Contentful</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
