import React, {Component} from 'react';

class Error extends Component {
    constructor(props){

        super(props)
        this.state = {
         hasErrors : false
        }

    }

    componentDidCatch(error, info){
        this.setState({hasErrors : true})
        
    }

    render(){
        const errors =
        this.state.hasErrors ? <div>Oops! Something went wrong.</div> : this.props.children;
        return errors


}

}
export default Error;