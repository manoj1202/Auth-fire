import React,{Component} from "react"
import {View, Text} from "react-native"
// import firebase from "firebase"
import {Header} from "./components/common"
import LoginForm from "./components/LoginForm"


class App extends Component{
    // Adding FireBase To  the app
    // componentWillMount(){
    //     firebase.initializeApp({/*   firebase data */})
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