import React,{ Component} from "react";
//Private Components
import { ContentBody } from './Content';
//Styles
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-drawer/dist/drawer.css';
import '@material/react-list/dist/list.css';

import '../App.css';
// Instantiation
import MaterialIcon from '@material/react-material-icon';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';

  

export class HeaderMenu extends Component {
    state = {selectedIndex: 0,open: false};
    render(){
        return(
        <div className='drawer-container'>
            {/* Adicionar a props 'modal' no Drawer coso prefirir como modal menu*/}
        <Drawer 
          dismissible
          open={this.state.open}
          onClose={() => this.setState({open: false})}>
          <DrawerHeader>
            <DrawerTitle tag='h2'>
              jane.smith@gmail.com
            </DrawerTitle>
          </DrawerHeader>

          <DrawerContent>
            <List singleSelection selectedIndex={this.state.selectedIndex}>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
                <ListItemText primaryText='Mail' />
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <DrawerAppContent className='drawer-app-content'>
            <TopAppBar fixed
                title='Inbox'
                navigationIcon={<MaterialIcon icon='menu'/>}
            >
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                    <TopAppBarIcon navIcon tabIndex={0}>
                        <MaterialIcon hasRipple icon='menu' onClick={() => this.setState({open: !this.state.open})}/>
                    </TopAppBarIcon>
                    <TopAppBarTitle>Miami, FL</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection align='end' role='toolbar'>
                    <TopAppBarIcon actionItem tabIndex={0}>
                        <MaterialIcon 
                        aria-label="print page" 
                        hasRipple 
                        icon='print' 
                        onClick={() => console.log('print')}
                        />
                    </TopAppBarIcon>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
    
            <TopAppBarFixedAdjust>
                <ContentBody/>
            </TopAppBarFixedAdjust>
        </DrawerAppContent>

        </div>
        )
    }

}

export default HeaderMenu;