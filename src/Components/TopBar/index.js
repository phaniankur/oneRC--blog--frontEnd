import React from 'react'
import Box from '../Library/Box'
import MainBar from './MainBar'

export const TopBar = ({children}) => {
  return (
    <Box>
        <MainBar/>
        <Box>
        {children}
        </Box>

    </Box>
  )
}
