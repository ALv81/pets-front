import axios from "axios"
import * as React from 'react';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalRegisterPet({setPets}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = async  (e) => {
        e.preventDefault()

       const data = {
        name : e.target.name.value,
        age : e.target.age.value,
        sex : e.target.sex.value,
        size: e.target.size.value,
        image: e.target.image.value
       }


       try {
        const response = await axios.post('http://localhost:4000/pet/create', data)

        const responsePets = await axios.get('http://localhost:4000/pet/all');

        setPets(responsePets.data.allPets)
        handleClose()
       } catch (error) {
        console.log(error)
       }

       console.log(data)
    }

  return (
        <div>
            <Button variant='contained' onClick={handleOpen}>Crear Mascota</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} display="flex" flexDirection="column" gap="10px">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Crear Mascota
                    </Typography>

                    <Box component="form" onSubmit={onSubmit} display="flex" flexDirection="column" gap="20px">
                        <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" name="name" />
                        <TextField fullWidth id="outlined-basic" label="Edad" variant="outlined" name="age" />
                        <TextField fullWidth id="outlined-basic" label="Sexo" variant="outlined" name="sex" />
                        <TextField fullWidth id="outlined-basic" label="Tamaño" variant="outlined" name="size" />
                        <TextField fullWidth id="outlined-basic" label="Imagen" variant="outlined" name="image" />

                        <Button variant='contained' type="submit">Crear</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
