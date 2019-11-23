import React from "react";

const SQCheck = ({sq,handleSQTest}) => {
        console.log(sq);
        return(
            <div>
                <h2 className='center'>Please answer the following security question</h2>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Check Point</legend>
                                <div className="lh-copy center">
                                    <h2 className='custom_header'>{sq}</h2>
                                </div>
                                <div>
                                    <label className="db fw6 lh-copy f6" htmlFor='SQanswer'>Answer</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type='text' name='security-question' id='inputSQ'/>
                                </div>
                                <div>
                                    <input className="b center ph3 mt3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                           type="submit" value="Submit" onClick={handleSQTest}/>
                                </div>
                            </fieldset>
                        </div>
                    </main>
                </article>
            </div>

        );
};

export default SQCheck;