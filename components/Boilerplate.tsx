import Box from '@mui/material/Box';
import React from 'react'

interface IBoilerPlateComponentProps {
  property1: any;
  property2: any;
}

/** @todo - style, add props, and add business logic to this BoilerPlateComponent  */
export const BoilerPlateComponent = ({ property1, property2 }: IBoilerPlateComponentProps) => {
  return (
    <Box>BoilerPlateComponent</Box>
  )
}