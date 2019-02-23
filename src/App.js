import React from 'react';

import CreateGlobalStyle from './styles/global';

import SideBar from './components/Sidebar';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
    <Wrapper>
        <CreateGlobalStyle/>
        <Container>
            <SideBar />
            <Content>
                <Header />
            </Content>
        </Container>
    </Wrapper>
);

export default App;
