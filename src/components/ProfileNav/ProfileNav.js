import React from 'react';
import Tilt from "react-tilt";
import brain from "../ProfileNav/brain.png";
import './ProfileNav.css';
import DropmenuBtn from "../Dropmenu_btn/DropmenuBtn";

export default function ProfileNav({onRouteChange,onPicChange,handleUpload}){
        return(
            <nav className='flex justify-between' style={{marginTop:'2em'}}>
                    <Tilt className="Tilt br2 shadow-2 ml2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                        <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} alt='Logo' src={brain}/></div>
                    </Tilt>
                    <DropmenuBtn profilePic={onPicChange} onRouteChange={onRouteChange} handleUpload={handleUpload}/>
            </nav>
        );
}