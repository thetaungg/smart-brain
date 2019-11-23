import React from 'react';
import './Checkpoint.css'

export default function MediaCard({onRouteChange,user}) {
    const {profilepicurl,name} = user;

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Is this your account?</legend>
                        <div className="mt3">
                            <img alt='profile_pic' src={profilepicurl} className='img_custom'
                                 title="Your Photo"/>
                        </div>
                        <div className="lh-copy center">
                            <h2 className='custom_header'>{name}</h2>
                        </div>
                        <div className="flex" style={{justifyContent: "space-between",alignItems:'center'}}>
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="No" style={{width: '65px'}} onClick={()=> onRouteChange('SignIn')}/>
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Yes" style={{width: '65px'}} onClick={() => onRouteChange('SQ')}/>
                        </div>
                    </fieldset>
                </div>
            </main>
        </article>
    );
}
