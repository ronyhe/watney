import React from 'react'
import { add } from '#logic/math'
import { Box, Button, Typography } from '@mui/material'

export function Main() {
    return (
        <Box>
            <Typography variant='h1'>Hello, world!</Typography>
            <Typography variant='h2'>2 + 2 = {add(2, 2)}</Typography>
            <Button variant='contained' color='primary'>
                Click me!
            </Button>
        </Box>
    )
}
