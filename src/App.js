import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import FindMyAcc from "./components/Find_My_Acc/FindMyAcc";
import ProfileNav from "./components/ProfileNav/ProfileNav";
import Checkpoint from "./components/Checkpoint/Checkpoint";
import SQCheck from "./components/SQCheck/SQCheck";
import PWChange from "./components/PWChange/PWChange";
import Particles from "react-particles-js";
import ChangeSuccess from "./components/ChangeSuccess/ChangeSuccess";


const particlesOptions = {
    "particles": {
    "number": {
        "value": 80
    },
    "size": {
        "value": 3
    }
},
    "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
};
const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'SignIn',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        sq: '',
        joined: '',
    }
};
class App extends Component{
    constructor(){
        super();
        this.state = initialState;
    }
    loadUser = (data) => {
        this.setState(
            {user: {
                        id: data.id,
                        name: data.name,
                        email: data.email,
                        sq: data.sq,
                        entries: data.entries,
                        joined: data.joined,
                        profilepicurl: data.profilepicurl,
                }
            }
        )
    };
    // componentDidMount() {
    //     fetch('http://localhost:3001/')
    //         .then(response => response.json())
    //         .then(console.log); //need to install npm package 'cors' on the other side to receive information form it
    // }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; //console log response to check out where this is coming from
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width, //clarifai gives bounding box in percentages,so, multiplying with actual width to get an actuate number
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)

        }
    };
    displayFaceBox = (box) => {
        this.setState({box: box});
    };
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };
    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        fetch('https://salty-crag-84848.herokuapp.com/imageurl',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        }).then(response => response.json())
            .then(response => {
            if(response){
            fetch('https://salty-crag-84848.herokuapp.com/image',{
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.state.user.id
                })
            }).then(response => response.json())
                .then(count => {
                    this.setState(Object.assign(this.state.user, {entries: count})); //updating only entries in user object
                })
                .catch(console.log);
        }
            this.displayFaceBox(this.calculateFaceLocation(response))})
            .catch(err => console.log(err));
    };
    onRouteChange = (route) =>{
        if(route === 'SignOut'){
            this.setState(initialState)
        }else if(route === 'home'){
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    };

     handleUpload = () =>{
        const url = document.getElementById('standard-basic');
        fetch('https://salty-crag-84848.herokuapp.com/uploadpic',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.user.email,
                profilepicurl: url.value
            })
        }).then(res => res.json())
            .then(url => this.setState(Object.assign(this.state.user, {profilepicurl:url})))
            .catch(err => console.log(err));

    };
     handlePWChange = () => {
         const password = document.getElementById('passwordC').value;
         const reenter = document.getElementById('re-enter_password').value;
         if( password === reenter){
             fetch('https://salty-crag-84848.herokuapp.com/pwchange',{
                 method: 'put',
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     email: this.state.user.email,
                     password: password
                 })
             }).then(response => response.json())
                 .then(data => {
                     if(data === 'success'){
                         this.onRouteChange('ChangeSuccess')
                     }else{
                         window.alert(`Something's wrong! Try again`)
                     }
                 });
         }else {
             window.alert('Two Password need to be the same')
         }
     };
     handleSQTest = () => {
         const answer = document.getElementById('inputSQ').value.toLowerCase();
         console.log(answer);
             fetch('https://salty-crag-84848.herokuapp.com/sqcheck',{
                 method: 'post',
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                         email: this.state.user.email,
                         answer: answer
                      })
             }).then(data => data.json())
                 .then(user => {
                     if (user.id){
                         this.onRouteChange('pwChange');
                     }else{
                         window.alert('Your answer is wrong. Please try again.')
                     }
                 }).catch(err => console.log(err));
     };

    render (){
        const {imageUrl, isSignedIn, box, route} = this.state;
        const {profilepicurl,entries,name,sq} = this.state.user;
     return (
        <div className="App">
            <Particles className="particles" params={particlesOptions} /> {/*this overrides everything ,so, we modify it from css*/}
            <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
            {route==='home' ?
                     <div>
                        <ProfileNav onRouteChange={this.onRouteChange} onPicChange={profilepicurl} handleUpload={this.handleUpload}/>
                        <Rank name={name} entries={entries}/>
                        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                        <FaceRecognition box={box}  imageUrl={imageUrl}/>
                     </div>
                :(route==='SignIn' ? (<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>)
                    :(route==='Register' ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    : (route==='findAcc' ? <FindMyAcc onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
                    : (route==='checkUser' ? <Checkpoint user={this.state.user} onRouteChange={this.onRouteChange}/>
                    : (route==='SQ' ? <SQCheck sq={sq} handleSQTest={this.handleSQTest}/>
                    :(route==='pwChange' ? <PWChange handlePWChange={this.handlePWChange}/>
                    :(route==='ChangeSuccess' ? <ChangeSuccess onRouteChange={this.onRouteChange}/> :<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>)))))))
            }

        </div>
)
}


}

export default App;
