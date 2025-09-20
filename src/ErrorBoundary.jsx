import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state={hasError:false};

    static getDerivedStateFromError(){
        return {hasError:true}
    }

    componentDidCatch(error){
        console.log(error)
    }
    
  render() {
   if(this.state.hasError){
    return (
        <div>
          <h2> OOps Something wrong😒</h2>
          <h3>please refresh the page!</h3>
        </div>
      )
   }
   else{
    return this.props.children;
   }
  }
}

