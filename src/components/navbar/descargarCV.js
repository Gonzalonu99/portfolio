import { Button } from '@mui/material'
import React from 'react';
import '../navbar/navbar.css';
import pdfCv from '../../assets/NunezCVEspañol.pdf';
const DescargarCV = () => {
  const descargarArchivo = ()=>{
    const link = document.createElement('a');
    link.href = pdfCv;
    link.download = 'NunezCVEspañol.pdf';
    link.click();
  };
  return (
    <Button className='descargaCV' sx={{backgroundColor:'#046380', color:'#fff', display:{xs: 'none', sm:'flex', md:'flex',lg:'flex', xl:'flex'}, marginRight:'50px'}} onClick={descargarArchivo}>
      Download CV
    </Button>
  )
}

export default DescargarCV