import React from 'react';
import './Register.css';

class Register extends React.Component{
    constructor (){
            super();
            this.state = {
                email: '',
                password: '',
                name: '',
                SQ: '',
                answer: ''
            }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    };
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    };
    onSQChange = (event) =>{
        this.setState({SQ: event.target.value})
    };
    onAnswerChange = (event) =>{
        this.setState({answer: event.target.value});
    };

    onSubmitRegister = () => {
        fetch('https://salty-crag-84848.herokuapp.com/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                SQ: this.state.SQ,
                answer: this.state.answer.toLowerCase()
            })
        }).then(response => response.json())
            .then(user => {
                if (user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }else {
                    alert('Error! Unable to register');
                }
            })
    };

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="email" name="name" id="name" onChange={this.onNameChange}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="email" name="email-address" id="email-address" onChange={this.onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password" onChange={this.onPasswordChange}/>
                            </div>
                            <div>
                                <label className="db fw6 lh-copy f6" htmlFor='SQ'>Security Question</label>
                                <select id='dropdownSQ' className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                                        onClick={this.onSQChange}>
                                    <option defaultValue='Choose'>Choose</option>
                                    <option> What was your childhood nickname? </option>
                                    <option> What is the name of your favorite childhood friend? </option>
                                    <option>In what city does your nearest sibling live?</option>
                                    <option>What was your dream job as a child?</option>
                                    <option>Who was your childhood hero?</option>
                                    <option>What is your favourite sport?</option>
                                    <option>What was your favourite subject in school?</option>
                                    <option>What is the name of your first crush?</option>
                                </select>
                            </div>
                            <div>
                                <label className="db fw6 lh-copy f6" htmlFor='SQanswer'>Answer</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type='text' name='security-question' id='inputSQ' onChange={this.onAnswerChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Register" onClick={this.onSubmitRegister}/> {/*don't want to run the function whenever this rendered,so,
                                                                                                                            make it arrow function to only run it when onclick happens */}
                        </div>
                    </div>
                </main>
            </article>
        );
    }
};
export default Register;