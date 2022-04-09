import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Checkbox } from '@mui/material';
import React, { useState } from 'react';
// import { initializeApp } from 'firebase/app';

// const cfg = {

// };

// const app = initializeApp(cfg);

type Todo = {
    title: string;
    detail: string;
    done: boolean;
    created_at: Date;
    user: string;
};

function TodoListPage() {
    const [rows] = useState<Todo[]>([]);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableCell>Done</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Detail</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>User</TableCell>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row: Todo) => (
                            <>
                                <TableRow>
                                    <Checkbox checked={row.done} />
                                </TableRow>
                                <TableRow>
                                    {row.title}
                                </TableRow>
                                <TableRow>
                                    {row.detail}
                                </TableRow>
                                <TableRow>
                                    {row.user}
                                </TableRow>
                                <TableRow>
                                    {row.created_at}
                                </TableRow>
                            </>
                        )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TodoListPage;
