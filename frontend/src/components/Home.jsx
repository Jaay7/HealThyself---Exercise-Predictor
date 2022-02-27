import React from 'react'
import { Typography, AppBar, Container, Toolbar, Box, Tab, Tabs, TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Button, OutlinedInput, Chip } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'transparent',
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: '#464646'
  },
  content: {
    width: '100%',
    padding: "60px 10%"
  },
  cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    width: '100%',
    
  },
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '@media screen and (max-width: 480px)': {
    content: {
      padding: "60px 10px"
    },
    form: {
      width: '100%',
      padding: "10px"
    }
  }
}))

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const ContainedButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: "6px 16px",
  textTransform: 'capitalize',
  width: "100%",
  fontSize: 16,
}));

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.container}>
      <AppBar style={{backgroundColor: 'transparent', boxShadow: 'none'}} position="absolute">
        <Container maxWidth="xl">
          <Toolbar className={classes.appBar} disableGutters>
            <span style={{flexGrow: 0.1}}></span>
            <Typography variant="p" style={{fontWeight: 500, color: '#323232', fontSize: 22}}>HealThyself</Typography>
            <span style={{flexGrow: 0.05}}></span>
            <span style={{flexGrow: 0.9}}></span>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.content}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ bgcolor: '#fff' }}>
            <AntTabs 
              value={value} 
              onChange={handleChange} 
              aria-label="ant example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <AntTab label="Home" />
              <AntTab label="Estimation" />
              <AntTab label="Exercies" />
              <AntTab label="BMI" />
            </AntTabs>
            <Box sx={{ p: 3 }} />
            {value === 0 && <UserForm />}
            {value === 1 && <h1>Estimation</h1>}
            {value === 2 && <h1>Exercies</h1>}
            {value === 3 && <h1>bmi</h1>}
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Home

const UserForm = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState();
  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();
  const [gender, setGender] = React.useState('');
  const [bodyPart, setBodyPart] = React.useState([]);

  const handleChangeGender = (event, newValue) => {
    setGender(newValue);
  };

  const handleChangeBodyPart = (event) => {
    const {
      target: { value }
    } = event;
    setBodyPart(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <div className={classes.cont}>
      <h3>User Form</h3>
      <div className={classes.form}>
        <TextField
          label="Age"
          type="number"
          className={classes.textField}
          sx={{ marginBottom: '10px' }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Weight"
          type="number"
          className={classes.textField}
          sx={{ marginBottom: '10px' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          label="Height"
          type="number"
          className={classes.textField}
          sx={{ marginBottom: '10px' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            className={classes.textField}
            sx={{ marginBottom: '10px' }}
            onChange={handleChangeGender}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Body Part</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bodyPart}
            label="Body Part"
            multiple
            className={classes.textField}
            sx={{ marginBottom: '10px' }}
            onChange={handleChangeBodyPart}
            input={<OutlinedInput id="demo-simple-select" label="Body Part" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
            )}
          >
            <MenuItem value={"Shoulders"}>Shoulders</MenuItem>
            <MenuItem value={"Chest"}>Chest</MenuItem>
            <MenuItem value={"Abdomin"}>Abdomin</MenuItem>
            <MenuItem value={"Legs"}>Legs</MenuItem>
            <MenuItem value={"Arms"}>Arms</MenuItem>
          </Select>
        </FormControl>
        <ContainedButton variant="contained">Submit</ContainedButton>
      </div>
    </div>
  );
}