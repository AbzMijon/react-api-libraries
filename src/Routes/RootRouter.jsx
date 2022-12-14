import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constans/routes';
import Home from '../Scenes/Home';
import Table from '../Scenes/Table';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.homePage} element={<Home />}></Route>
            <Route path={ROUTES.tables} element={<Table />}></Route>
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;