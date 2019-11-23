import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
  if(isSignedIn){
      return (<div>
            </div>);
  }else {
      return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
              <p className="f3 link dim black underline p-3 mr3 pointer" onClick={() => onRouteChange('SignIn')}>Sign
                  In</p>
              <p className="f3 link dim black underline p-3 pointer"
                 onClick={() => onRouteChange('Register')}>Register</p>
          </nav>
      );
  }
};
export default Navigation;
// if(isSignedIn){
//     return (<div className="tr mw-100 fl">
//         <img alt='profile_pic' src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib ba b--black-05 pa3 mr2"
//              title="Photo of a kitty staring at you"/>
//     </div>);
// }else{
//     return(
//         <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
//             <p className="f3 link dim black underline p-3 mr3 pointer" onClick={() => onRouteChange('SignIn')}>Sign In</p>
//             <p className="f3 link dim black underline p-3 pointer" onClick={() => onRouteChange('Register')}>Register</p>
//         </nav>
//     );
// }
// return(
//     <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
//         <p className="f3 link dim black underline p-3 pointer" onClick={() => onRouteChange('SignOut')}>Sign Out</p> {/*don't want to run the function whenever this rendered,so,
//                                                                                                                            </nav>);
