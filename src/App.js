import React,{Component} from "react"
import {View} from "react-native"
// import firebase from "firebase"
import {Header, Button} from "./components/common"
import LoginForm from "./components/LoginForm"
import { timingSafeEqual } from "crypto";


class App extends Component{
    state ={
        loggedIn: null
    }
    // Adding FireBase To  the app
    // componentWillMount(){
    //     firebase.initializeApp({/*   firebase data */})

    // firebase.auth().onAuthStateChanged((user) => {
    //  if(user){
        // this.setState({loggedIn: true});
        // } else{
        //     this.setState({loggedIn: false})
        // }
    // })
    // }

    renderContent(){
        if(this.state.loggedIn){
            return(
                <Button>
                  Log Out
                </Button>
            )
        }

        return <LoginForm />
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App