import React from 'react';
import TopHeader from '../../components/HeaderHook';
import SiderNav from '../../components/SiderNav';
import Main from '../Main';
import { AppContextProvider } from '../../context/reducer';

function Layout() {
        return (  
            <AppContextProvider>
                <SiderNav></SiderNav>
                <TopHeader></TopHeader>
                <Main></Main>
            </AppContextProvider>
        );
}
 
export default Layout;