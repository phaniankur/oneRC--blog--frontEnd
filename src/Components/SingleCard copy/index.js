import React from 'react'
import Box from '../Library/Box'
import Image3 from '../../images/img3.jpg'
import Image2 from '../../images/img2.jpg'

const SingleCard = () => {
  return (
    <Box
    height = '80vh'
    //minWidth={['100%', '30rem']}
    borderRadius = '15px'
    margin = {[ '0.5rem' ,'1rem']}
    position = 'relative'
    >
        <img src={Image3} style= {{height: '100%', width: '100%'}}/>
        <Box
        position = 'absolute'
        top= '70%'
        left= '5%'
        transform= 'translate(-50%, -50%)'
        display = 'flex'
        flexDirection = 'column'
        color = 'white'
        >
            <Box
            fontSize = '1.5rem'
            fontWeight = 'bold'
            >What story does the eye hold?</Box>
            <Box display = 'flex' mt='0.5rem'>
                <Box pr='0.5rem'>Ankur Yadav</Box>
                <Box pr='0.5rem'>.</Box>
                <Box >24.02.22</Box>
            </Box>
        </Box>
        <Box color='white'
        textDecoration = 'underline'
        width='100%'
        position = 'absolute'
        top= '90%'
        transform= 'translate(-50%, -50%)'
        display = 'flex'
        justifyContent='center'
        color = 'white'>
            Read More
        </Box>

    </Box>
  )
}

export default SingleCard