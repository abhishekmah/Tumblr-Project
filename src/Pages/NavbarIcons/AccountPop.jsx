import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { TiUser } from 'react-icons/ti';
import styles from './NavIcons.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import RedeemIcon from '@mui/icons-material/Redeem';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import PaletteIcon from '@mui/icons-material/Palette';
import {BiUserPlus} from 'react-icons/bi'
import { Divider } from '@mui/material';

export default function AccountPop() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div {...bindTrigger(popupState)}>
            <TiUser/>
          </div>
          <Menu {...bindMenu(popupState)} >
            <div className={styles.accountPopWindow}>
         <MenuItem onClick={popupState.close}><FavoriteIcon/> &nbsp; Likes </MenuItem>
            <MenuItem onClick={popupState.close}><BiUserPlus style={{fontSize:"x-large"}}/> &nbsp; Following</MenuItem>
            <MenuItem onClick={popupState.close}><SettingsIcon/> &nbsp; Settings</MenuItem>
         <MenuItem onClick={popupState.close}><RedeemIcon/> &nbsp; What's new </MenuItem>
            <MenuItem onClick={popupState.close}><HelpIcon/> &nbsp; Help</MenuItem>
            <MenuItem onClick={popupState.close}><KeyboardAltOutlinedIcon/> &nbsp; Keyboard shortcuts</MenuItem>
            <MenuItem onClick={popupState.close}><PaletteIcon/> &nbsp; Change Pallette</MenuItem>
            <Divider/>
            </div>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
