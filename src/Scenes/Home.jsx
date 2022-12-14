import React, { useMemo, useState } from 'react';
import BarChart from '../Components/BarChart';
import { UsersData } from '../constans/usersData';
import styled from 'styled-components';
import LineChart from '../Components/LineChart';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const StyledHome = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .home__bar-chart, .home__line-chart {
        width: 700px;
        border: 1px solid #000;
        padding: 10px 15px;
        margin-top: 10px;
    }
    .home__title {
        font-size: 40px;
        margin: 20px 0;
        color: #000;
    }
`

function Home() {

    const [userData, setUserData] = useState({
        labels: UsersData.map((user) => user.year),
        datasets: [{
            label: 'Количество денег пользователя',
            data: UsersData.map((user) => user.totalMoney),
            borderWidth: 3,
        }]
    });

    return (
        <StyledHome>
            <h2 className='home__title'>Grafics with use Chart.js | React</h2>
            <div className='home__bar-chart'>
                <BarChart chartData={userData} />
            </div>
            <div className="home__line-chart">
                <LineChart chartData={userData}/>
            </div>
        </StyledHome>
    )
}

export default Home;