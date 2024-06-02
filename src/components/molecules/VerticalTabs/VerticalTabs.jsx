import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MovieClapper from '../../atoms/Icon/MovieClapper';
import PenTool from '../../atoms/Icon/PenTool';
import Message from '../../atoms/Icon/Message';
import Thick from '../../atoms/Icon/Thick';
import Chat from '../../organisms/ChatContainer';
import SelEvaluationBox from '../../organisms/SelfEvaluationBox/SelEvaluationBox'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ flexGrow: 1, display: value === index ? 'block' : 'none', height: '100%' }}
    >
      {value === index && (
        <Box sx={{width: '1128px'}}>
         <Typography component={'div'} sx={{ height: '100%' }}>{children}</Typography>
       </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({project}) {
   
  const [value, setValue] = React.useState(0);
  const [projectData, setProjectData] = React.useState(project || {});

  React.useEffect(() => {
    if (project) {
      setProjectData(project);
    }
  }, [project]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
      display: 'flex',
      // justifyContent: 'center',     
      // alignItems: 'center',         
      height: '100vh', 
      alignItems: 'stretch',
       
     }}
    >
    <Box sx={{ width: 96, position:'fixed', top:'132px', left:'50px' }}> 
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{border:1, borderRadius: '20px', borderColor: '#4DB8FF', height: '100%', ...(value === 3 && {borderRadius: '20px 20px 0px 20px'}),  
       
        '& .MuiTab-root': {   
          minHeight:108,
          textTransform: 'capitalize',
          fontSize:'16px',
          borderColor:'#4DB8FF', 
          color:'#333333', 
        }, 

        '& .Mui-selected': {
          color:'#F8F8FF',
          bgcolor: '#592ADC',     
          borderRadius: '20px 20px 0px 20px',
          borderColor: '#592ADC',            
        },
       
        '& MuiButtonBase-root-MuiTab-root.Mui-selected':{
          color:'#F8F8FF',
        },
                                           
        '& .MuiTabs-indicator':{
          width:0
        },
               
      }}
      >
        <Tab icon={<MovieClapper color={value === 0 ? '#F8F8FF' : '#4DB8FF'} width={50}  />} label={<Typography sx={{ marginTop: '10px'}}>Video</Typography>} {...a11yProps(0)}  />
        <Tab icon={<PenTool color={value === 1 ? '#F8F8FF' : '#4DB8FF'} width={50} />} label={<Typography sx={{ marginTop: '10px' }}>Recursos</Typography>} {...a11yProps(1)} sx={{borderTop:1, borderBottom:1, ...(value === 0 && {
                borderTop: 'none'}), ...(value === 2 && {borderBottom: 'none'})}} />
        <Tab icon={<Message color={value === 2 ? '#F8F8FF' : '#4DB8FF'} width={50} />} label={<Typography sx={{ marginTop: '10px' }}>Chat</Typography>} {...a11yProps(2)} sx={{borderBottom:1,  ...(value === 3 && {border: 'none'})}} />
        <Tab icon={<Thick  color={value === 3 ? '#F8F8FF' : '#4DB8FF'} width={50} />} label={<Typography sx={{ marginTop: '10px' }}>Informe</Typography>} {...a11yProps(3)} />
      </Tabs>
    </Box>
    <Box>
      <TabPanel value={value} index={0}>
        Video
      </TabPanel>
      <TabPanel value={value} index={1}>
        Recursos
      </TabPanel>
      <TabPanel value={value} index={2}>
        {projectData.record ? <Chat record={projectData.record} /> : <Typography>Información no disponible</Typography>}
      </TabPanel>
      <TabPanel value={value} index={3}>
    <SelEvaluationBox />
      </TabPanel>
    </Box>
    </Box>
  );
}

VerticalTabs.propTypes = {
  project: PropTypes.object
}
