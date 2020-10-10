import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip } from '@material-ui/core'
// Container, Paper, Chip //
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(5, 10, 0, 20),
        padding: theme.spacing(2),
        width: theme.spacing(50),
        maxHeight: theme.spacing(100)
      },
    },
  }));



const Car = (props) => {
    const classes = useStyles();
    let id = props.match.params.id;
    let car = cars.find(car => car.id === Number(id))
    let carName = car.Name.toUpperCase();
    return (
        <Container maxWidth='md' className={classes.root} id='container'>
            <Paper round elevation={10}>
                <h1>{carName}</h1>
                <Chip label={`id: ${car.id}`}/>
                <Chip label={`Car Name: ${carName}`}/>
                <Chip label={`Year: ${car.Year}`}/>
                <Chip label={`Origin: ${car.Origin}`}/>
                <Chip label={`Cylinders: ${car.Cylinders}`}/>
                <Chip label={`Displacement: ${car.Displacement}`}/>
                <Chip label={`Horsepower: ${car.Horsepower}`}/>
                <Chip label={`Weight in Lbs: ${car.Weight_in_lbs}`}/>
                <Chip label={`MPG: ${car.Miles_per_Gallon}`}/>
                <Chip label={`Acceleration: ${car.Acceleration}`}/>
            </Paper>
        </Container>
    )
}

export default Car