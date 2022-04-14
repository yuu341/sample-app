import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Checkbox } from '@mui/material';
import { getConfig } from '@testing-library/dom';
import React, { createContext , useState, useContext, useEffect } from 'react';

type Profile = {
    title: string;
    detail: string;
    done: boolean;
    created_at: Date;
    user: string;
};


type ProfileProps = {
    
};


const ProfileCard:React.VFC<any> = (props: any) => {
    return (
    <div>
        <title>hogehoge</title>
    </div>);
}

export const ProfileListPage:React.VFC<ProfileProps> = (props: ProfileProps) => {

    const [rows, setRows ] = useState<ProfileProps[]>([]);
    const [ searchText , setSearchText ] = useState<string>("");

    return (
        <ProfileCard></ProfileCard>
    );
}

export default ProfileListPage;

