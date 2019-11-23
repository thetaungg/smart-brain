import React from 'react';

class Profile extends React.Component{

    constructor(){
        super();
        this.state = {
            name : '',
            email: '',
            entries: ''
        }
    }

    render() {
        return (
            <div>
                <h1>This is Profile </h1>
            </div>
        );
    }

}
export default Profile;