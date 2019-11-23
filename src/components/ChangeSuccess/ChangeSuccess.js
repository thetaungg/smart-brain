import React from "react";

const ChangeSuccess = ({onRouteChange}) => {
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure"> {/* with form with button type=submit it automatically tries to submit/ We don't want that. We are submitting with nodejs*/}
                    <fieldset className="ba b--transparent ph0 mh0">
                        <h4 className="f2 fw6 ph0 mh0">Password Changed Successfully</h4>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Done" onClick={() => onRouteChange('SignIn')}/> {/*onClick={()=> onRouteChange // don't want to run the function whenever this rendered,so,
                                                                                                                            make it arrow function to only run it when onclick happens */}
                        </div>
                    </fieldset>
                </div>
            </main>
        </article>
    );
};

export default ChangeSuccess;