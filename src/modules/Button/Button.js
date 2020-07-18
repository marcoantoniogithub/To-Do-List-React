import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      styleButton :{
        backgroundColor: 'white'
      } 
    }; 
  }

  componentDidMount(){
    if(this.props.style === 'primary' ){
      this.setState({
        styleButton: {
          backgroundColor: 'blue',
          color: 'white'
        }
      }); 
    }else if(this.props.style === 'secundary'){
      this.setState({
        styleButton: {
          backgroundColor: 'red',
          color: 'white'
        }
      });
    }
  };

  componentDidUpdate(){

  }

  componentWillUnmount(){
    
  }

  render() {
    const { styleButton } = this.state;
    const { children, onClick } = this.props;
    
    return (
      <div>
        <button class="teste" onClick={onClick} style={styleButton}>{children}</button>
      </div>
    );
  }
}

export default Button;