import React from 'react'
import Box from '../Library/Box'

const MainBar = () => {
  return (
    <Box
    bg='topBarBlack'
    display= 'flex'
    justifyContent = 'space-around'
    alignItems = 'center'
    minHeight = '3rem'
    color='white'
    position = 'fixed'
    zIndex='999'
    width = '100%'
    >
      <Box>Back</Box>
      <Box>One Rupee Club</Box>
      <Box>Post</Box>
    </Box>  )
}

export default MainBar