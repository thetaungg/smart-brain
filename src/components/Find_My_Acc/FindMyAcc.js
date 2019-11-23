import React from 'react';

class FindMyAcc extends React.Component{
    constructor(){
        super();
        this.state = {
            email: ''
        }
    }
    onEmailChange = (event) =>{
        this.setState({
            email: event.target.value
        })
    };
    onSubmitSearch = () =>{
        fetch('https://salty-crag-84848.herokuapp.com/findAcc',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.email
            })
        }).then(response => response.json())
            .then(user => {
                if(user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange('checkUser');
                }
            }).catch(err => {
                window.alert(`The user doesn't exit`);
        })
    };

    render() {
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="find_acc" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Find Your Account</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="email" name="email-address" id="email-address" onChange={this.onEmailChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Search" onClick={this.onSubmitSearch} />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default FindMyAcc;