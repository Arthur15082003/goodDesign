import React from 'react';
import './App.css';
import car from './bmw.jpg';
import shoes from './shoes.jpg';

class App extends React.Component {
  state = {
    selectedItem: '',
    categories: 'dress',
    toggle: false,
  }
  render() {
    console.log(this.state.categories);
    return (
      <div>
        <div>
          <div className="both">
            Buy it!
          </div>
          <div className="logo">
            <header className="header">
              <div className="itemHeader">
                Sign in
              </div>
              <div style={{marginLeft: '30px'}} className="itemHeader">
                Sign up
              </div>
              <div className="itemHeader" style={{marginLeft: '30px'}}>
                About
              </div>
            </header>
          </div>
        </div>
        <div className={this.state.toggle ? 'closeTab' : 'openTab'} onClick={() => this.setState({toggle: !this.state.toggle})}>
          <div className="line">
          </div>
          <div className="line">
          </div>
          <div className="line">
          </div>
        </div>
          <div className="categories">
            <div style={{marginLeft: '30px'}} onClick={() => this.setState({categories: 'dress'})}>
              Dress
              <div className={this.state.categories === 'dress' ? 'categoriesLine' : ''}> 
              </div>
            </div>
            <div style={{marginLeft: '30px'}} onClick={() => this.setState({categories: 'glasses'})}>
              Glasses
              <div className={this.state.categories === 'glasses' ? 'categoriesLine' : ''}> 
              </div>
            </div>
            <div style={{marginLeft: '30px'}} onClick={() => this.setState({categories: 3})}>
              Category 3
              <div className={this.state.categories === 3 ? 'categoriesLine' : ''}> 
              </div>
            </div>
            <div style={{marginLeft: '30px'}} onClick={() => this.setState({categories: 4})}>
              Category 4
              <div className={this.state.categories === 4 ? 'categoriesLine' : ''}> 
              </div>
            </div>
          </div>
        <div>
          {this.state.categories === 'dress' &&
            <div className="body">
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
              <div>
                <div className="img">
                </div>
              </div>
            </div>
          }
          {this.state.categories === 'glasses' &&
            <div className="body">
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
              <div className="glasses">
              </div>
            </div>

          }  
          
        </div>
        {/* <div className="categoriesLine"> */}
        {/*    */}
        {/* </div> */}
      </div>
      );
  }
}

export default App;
