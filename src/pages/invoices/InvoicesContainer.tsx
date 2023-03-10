import React, { useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import { Header } from '../../components';

export const InvoicesContainer: React.FC = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns: GridColDef[] = useMemo((): GridColumns => [
		{
			field: 'id',
			headerName: 'ID',
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'phone',
			headerName: 'Phone',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: (params) => (
				<Typography color={colors.greenAccent[500]}>
					{params.row.cost}
				</Typography>
			)
		},
		{
			field: 'date',
			headerName: 'Date',
			flex: 1,
		},
	], [colors]);
	return (
		<Box m={1.25}>
			<Header title='INVOICES' subTitle='List of Invoices Balances' />
			<Box
				mt={2.5}
				height={'75vh'}
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none'
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none'
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300]
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none'
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},

				}}
			>
				<DataGrid
					checkboxSelection
					rows={mockDataInvoices}
					columns={columns}
				/>
			</Box>
		</Box>
	);
};
