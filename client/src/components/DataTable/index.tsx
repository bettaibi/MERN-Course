import React from 'react';

import { Paper } from '@material-ui/core';
import { GridColDef, DataGrid } from '@material-ui/data-grid';

interface DatatableProps{
    rows: any[];
    columns: GridColDef[];
}
const DataTable: React.FC<DatatableProps> = ({rows, columns}) => {

    return (
        <Paper>
            <DataGrid 
            onSelectionModelChange = {(param)=> console.log(param)} 
            pageSize={5} 
            autoHeight 
            checkboxSelection 
            rows = {rows} 
            columns = {columns} 
            />
        </Paper>
    )
}

export default DataTable;
