import { useEffect, useState } from 'react'
import axios from "axios"
import { Navigate } from 'react-router-dom'

import { Box } from "@mui/material"
import {Button} from '@mui/material'
import ModalRegisterPet from './ModalRegisterPet'

const Panel = () => {

  const user = localStorage.getItem('user')

  const [pets, setPets] = useState([]);

  if (!user) {
    return <Navigate to="/login" />
  }



  useEffect(() => {
    const getAllPets = async () => {
      try {
        const response = await axios.get('http://localhost:4000/pet/all');
        setPets(response.data.allPets);
      } catch (error) {
        console.error("Error al obtener las mascotas", error);
      }
    };

    getAllPets();
  }, []);

  console.log(pets)







  return (
    <Box display="flex" flexDirection="column" gap="20px"  p="30px">
      <Box>
       <ModalRegisterPet />
      </Box>

      <Box display="flex" gap="15px">
      {
        pets?.map(pet => {

          return <Box key={pet.id} width="250px" height="250px" display="flex" flexDirection="column" gap="10px">
            <Box component="img" src={pet.image} width="100%" borderRadius="10px"  />
    
            <p>Nombre: {pet.name}</p>
            <p>Edad: {pet.age}</p>
            <p>Tamaño: {pet.size}</p>
            <Button  fullWidth variant='contained' color='warning'>
              Adoptar
            </Button>
          </Box>
        })
      }
      </Box>
    </Box>
  )
}

export default Panel