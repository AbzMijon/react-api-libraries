import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import styled from 'styled-components';

const StyledTable = styled.div `
    .home__table {
        color: #000;
        width: 610px;
        height: 500px;
    }
    .table__title {
        color: #000;
        font-weight: bold;
        text-align: center;
        margin: 15px 0;
    }
`

function Table() {

    const rowData = [
        {make: 'Ford', model: 'Mustang', price: 140000},
        {make: 'Tayota', model: 'Camry', price: 30000},
        {make: 'BMW', model: 'M8', price: 220000},
    ];

    const columnDefs = [
        {field: 'make'},
        {field: 'model'},
        {field: 'price'},
    ];

    const defaultColDefs = useMemo(() => ({
        sortable: true,
        filter: true,
    }), []);

    const clickSell = useCallback((e) => {
        console.log(e);
    }, []);

    return (
        <StyledTable>
                <h2 className='table__title'>Table with use Ag-grid | React</h2>
                <div className="ag-theme-alpine home__table">
                    <AgGridReact 
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDefs}
                        rowSelection='multiple'
                        onCellClicked={clickSell}
                    />
                </div>
        </StyledTable>
    )
}

export default Table