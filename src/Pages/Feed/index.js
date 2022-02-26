import React from 'react'
import Box from '../../Components/Library/Box'
import { TopBar } from '../../Components/TopBar/index'
import SingleCard from '../../Components/SingleCard'
import SingleCard2 from '../../Components/SingleCard copy'
const index = () => {
  return (
    <TopBar>
        <Box bg='black'
        display = 'flex'
        alignItems = 'center'
        flexDirection = 'column'
        paddingTop = '3rem'
        width = '100%'
        height = '100%'

        >
            <SingleCard/>
            <SingleCard2/>

        </Box>

    </TopBar>
  )
}

export default index