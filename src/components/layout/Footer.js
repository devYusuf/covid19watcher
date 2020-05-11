import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<>
    	<br/>
      <br/>
    	<br/>
      <div style={{position: 'fixed', bottom:'0', width:'100%', padding: '30px', textAlign: 'center'}} className="has-background-warning">
        <p className="">App Developed using <a href="https://reactjs.org">React</a> by Yusuf Abdulrahan</p>
      </div>
      </>
    )
  }
}

export default Footer
