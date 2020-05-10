import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Layout} from "antd";
import './style.scss'
import Header from "./Layout/Header";
class App extends Component {
    state = {
      title:'hi'
    };

    render(){

        return (
           <div>
               <Layout>
                    <Header />
               </Layout>
           </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));
