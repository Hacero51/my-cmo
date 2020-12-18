import React from 'react';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';

//material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
    maxWidth: 1000,
    flexGrow: 1,
    height: 500,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 20,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: 1000,
    overflow: 'hidden',
    width: '100%',
  },
}));

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
              <div className={classes.root}>
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
	 
 </>
 
 )
 
 
}
 
export default Dashboard;