import React from 'react';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';

//crono-notificaciones
import { Chrono } from "react-chrono";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CenterFocusStrong } from '@material-ui/icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slider = [
  {
    imgPath:
      '../slider/1.jpg',
  },
  {
    imgPath:
      '../slider/2.jpg',
  },
  {
    imgPath:
      '../slider/3.jpg',
  },
  {
    imgPath:
      '../slider/4.jpg',
  },
  {
    imgPath:
      '../slider/5.jpg',
  },
  {
    imgPath:
      '../slider/6.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin:0,
    flexGrow: 1,
    height: 500,
  },
  header: {
    display: 'flex',
    height: 20,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: 800,
    overflow: 'hidden',
    width: '100%',
  },
}));


  const items = [
    {
    title: "ENERO 2021",
    cardTitle: "Hojas de vida",
    cardSubtitle:"Reunion compuestos",
    }, 
    {
    title: "FEBRERO 2021",
    cardTitle: "FMMKSMDMSD",
    cardSubtitle:"DFDFDFDFDFDFDFDFDFDFD",
    },
    {
    title: "MARZO 2021",
    cardTitle: "DFDFDFDFDFD",
    cardSubtitle:"DDFDFDFDFDFDFDFDFDFDFD",
    }, 
    {
    title: "ABRIL 2021",
    cardTitle: "SSDSDSDSD",
    cardSubtitle:"DSDFFSFSSFSFSFGRGTNTHRSFER",
    },
    {
    title: "MAYO 2021",
    cardTitle: "FDFNFJBENFNEF",
    cardSubtitle:"DFNENFKEKNENDKS",
    },     
          
  ];

function Dashboard() {
       const classes = useStyles();
       const theme = useTheme();
       const [activeStep, setActiveStep] = React.useState(0);
       const maxSteps = slider.length;
     
       const handleNext = () => {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
       };
     
       const handleBack = () => {
         setActiveStep((prevActiveStep) => prevActiveStep - 1);
       };
     
       const handleStepChange = (step) => {
         setActiveStep(step);
       };


 
 return(
 
 <>
 
	 <Menu /> 
         <Header/>
         <div className="container">
           <br/>
         <div>
          <h6>Documentos Pendientes</h6>
          <br/>
              <div style={{ width: "1140px", height: "220px" }}>
                  <Chrono items={items} slideShow slideItemDuration={4500} theme={{primary: "red", secondary: "white", cardBgColor: "blue", cardForeColor: "yellow" }}/>               
              </div>
          </div>
          <br/>
           <div align="center">
              <div className={classes.root} align="center">
                     <Paper square elevation={0} className={classes.header}>
                     </Paper>
                     <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                     >
                            {slider.map((step, index) => (
                            <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                   <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                            </div>
                            ))}
                     </AutoPlaySwipeableViews>
                     <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                            }
                            backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                            </Button>
                            }
                     />
                    </div>
 
              </div>
              <br/>
                    <br/>

              </div>
	 
 </>
 
 )
 
 
}
 
export default Dashboard;