import React from 'react';
import '../../App.css';
import AdSlider from '../../components/AdSlider';
import Top5 from '../../components/Top5';

class Home extends React.Component {
    render(){
      return (
        <div className="App">
          <header className="App-header" />
          <AdSlider/>
          <Top5/>
          
        </div>
      );
    }
  }
  
  
  export default Home;
  