import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import './DropmenuBtn.css'
import UploadProfilePic from "../UploadProfilePic/UploadProfilePic";

export default function SimpleMenu({profilePic,onRouteChange,handleUpload}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{display:"inline", marginRight: '5px'}}>
                <img alt='profile_pic' src={profilePic} className='img_custom1'
                     title="Photo of a kitty staring at you"/>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <span><UploadProfilePic handleUpload={handleUpload}/></span> {/*solving error*/}
                <Divider variant='middle'/>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={() => onRouteChange('SignOut')}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
