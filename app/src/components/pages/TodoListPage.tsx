import { collection, doc, getDoc } from '@firebase/firestore';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Checkbox, Button, TableSortLabel, FormLabel } from '@mui/material';
import { getConfig } from '@testing-library/dom';
import { getAuth } from 'firebase/auth';
import { app, firestore } from 'FirebaseConnection';
import { load } from 'mime';
import React, { createContext , useState, useContext, useEffect } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

type Todo = {
    title: string;
    detail: string;
    done: boolean;
    created_at: Date;
    user: string;
};

function useTodoList(userId: string) {
    const [ todoList , setTodoList ] = useState<Todo[]>([]);

    useEffect(() => {

    }, [todoList]);

    return todoList;
}

type TodoProps = {

};

export const TodoListPage:React.VFC<TodoProps> = (props: TodoProps) => {

    const [rows, setRows ] = useState<any[]>([]);
    // const rows = [{
    //     "title": "hoge",
    //     "created_at": new Date(),
    //     "content": "content",
    //     "done": true
    // }];

    const loadData = async () => {
        const auth = getAuth();
        const uid: string = auth?.currentUser?.uid ?? "";
        const docRef = await doc(firestore, "todolist" , uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log(docSnap.data().items);
            setRows(docSnap.data().items);
        }
    };

    const upload = async () => {
        const auth = getAuth();
        const uid: string = auth?.currentUser?.uid ?? "";
        
        const realtime = getDatabase();
        set(ref(realtime, 'users/' + uid), {
            created_at: new Date(),
            
        });
    };

    return (
        <>
        <Button onClick={loadData}>Load Data</Button>
        <Button onClick={upload}>upload</Button>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableCell>Done</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Created At</TableCell>
                </TableHead>
                <TableBody>
                    {
                        rows.map(p => (<TableRow>
                            <TableCell>
                                <Checkbox checked={p.done} />
                            </TableCell>
                            <TableCell>
                                {p.title}
                            </TableCell>
                            <TableCell>
                                {p.content}
                            </TableCell>
                            <TableCell>
                                {p.created_at.toString()}
                            </TableCell>
                        </TableRow>))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default TodoListPage;

