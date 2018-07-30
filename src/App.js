import React,{Component} from "react"
import {View, Text} from "react-native"
// import firebase from "firebase"
import {Header} from "./components/common"
import LoginForm from "./components/LoginForm"


class App extends Component{
    state ={
        loggedIn: false
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
    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App