import React, {Component} from 'react';


class Cities extends Component {

    state = {
        Cities: []
    }

    componentDidMount(){

        const API = ''

        fetch(API)
        .then(data => console.log(data))
        .then(result => {
            this.setState({
                Cities:result
            });
        });
    }

    render() {

        const {Cities} = this.state;


        console.log('======render')
        console.log(Cities)

        return(
            <div>
               <h2>List:</h2> 
            </div>
        )
    }
}

export default Cities;