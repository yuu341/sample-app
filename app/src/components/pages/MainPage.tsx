import React from 'react';
import { initializeApp } from 'firebase/app';
import TodoListPage from './TodoListPage';
// import { Header } from '@mui/material'

const cfg = {

};

const app = initializeApp(cfg);

function MainPage() {
  return (
      <TodoListPage></TodoListPage>
  );
}

export default MainPage;
