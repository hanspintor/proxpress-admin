import React from 'react'
import PaginationTable from './PaginationTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppCashouts = () => {
    return (
        <Container>
            <Box py="12px" />
            <SimpleCard title="Cashouts">
                <PaginationTable />
            </SimpleCard>
        </Container>
    )
}

export default AppCashouts
