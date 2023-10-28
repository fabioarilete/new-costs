import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Container from './components/Container';
import SideBar from './components/Sidebar';
import { Modal, ModalTarget } from './components/Modal/Modal';

type Props = {};

const App = (props: Props) => {
  return (
    <Modal target={ModalTarget.ROOT}>
      <Router>
        <SideBar />
        <Container>
          <AppRoutes />
        </Container>
      </Router>
    </Modal>
  );
};

export default App;
