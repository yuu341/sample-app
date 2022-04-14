import React from 'react';
import menu from 'data/menu.json';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import { MenuItem, Menu, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function IconByName(props: {name: string}){
    switch(props.name) {
        case "dashboard": 
            return (<DashboardIcon />)
        case "profile": 
            return (<PersonIcon />)
        case "home": 
            return (<HomeIcon />)
    }
    return (<></>);
}

export default function SideNavigation() {
    
    const createListItem = (item:any) => {
        return (
        <ListItemButton onClick={() => {
        }}>
            <ListItemIcon>
                <IconByName name={item.icon}/>
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
        </ListItemButton>
        );
    }

    return (
        <>
            {
                menu.map( p=> (createListItem(p)))
            }
        </>
    );
}