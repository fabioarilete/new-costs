import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Container from './components/Container';
import SideBar from './components/Sidebar';

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <SideBar />
      <Container>
        <AppRoutes />
      </Container>
    </Router>
  );
};

export default App;
