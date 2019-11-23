import React from "react";

const PWChange = ({handlePWChange}) =>{

        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure"> {/* with form with button type=submit it automatically tries to submit/ We don't want that. We are submitting with nodejs*/}
                        <fieldset className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Create New Password</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="passwordC"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="re-enter_password">Re-Enter</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="re-enter_password" id="re-enter_password"/>
                            </div>
                            <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit" value="Submit" onClick={handlePWChange}/> {/*onClick={()=> onRouteChange // don't want to run the function whenever this rendered,so,
                                                                                                                            make it arrow function to only run it when onclick happens */}
                            </div>
                        </fieldset>
                    </div>
                </main>
            </article>
        );
};

export default PWChange;