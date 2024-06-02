import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import BoxContainer from '../../atoms/Box';
import FolderEmpty from '../../atoms/Icon/FolderEmpty';
import Search from '../../atoms/Icon/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from '../../../theme/theme';
import { useLocation } from 'react-router-dom';
import HomeContainer from '../../organisms/HomeContainer';
import VerticalTabs from '../VerticalTabs/VerticalTabs';

const tabStyles = {
    minHeight: '2.5rem',
    minWidth: '25rem',
    padding: '6px 40px 6px 40px',
    borderRadius: '4px 30px 0px 0px',
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    display: 'flex',
    gap: '1.5rem',
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      gap: '0.5rem',
      alignItems: 'center',
    },
  };

  const selectedTabStyles = {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props; //destructuración de props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{display: 'flex', justifyContent: 'center'}}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BaseTabs = ({projects, projectSelected}) => {
  const [value, setValue] = useState(0);
  const [project, setProject] = useState(projectSelected || {});
  const [currentLocation, setcurrentLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    setcurrentLocation(location.pathname);
  }, [])

  useEffect(() => {
    setProject(projectSelected)
  }, [projectSelected])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{height:'41.5', width:'70.5rem', border: 'none'}}>
      <Box sx={{height:'2.5rem'}}>
        <Tabs value={value} indicatorColor='accent' textColor={'inherit'} onChange={handleChange} aria-label="Tabs-proyect" sx={{height:'2.5rem', width:'100%'}}>
          <Tab icon={<FolderEmpty color={`${value === 1 ?theme.palette.text.main : theme.palette.background.main}`} width={24}/>} iconPosition="start" label="Proyectos" {...a11yProps(0)} sx={{ ...tabStyles, ...(value === 1 && selectedTabStyles),  color: `${value === 1 ? theme.palette.text.main : theme.palette.background.main}` }}/>
          <Tab icon={<Search color={`${value === 0 ? theme.palette.text.main : theme.palette.background.main}`} width={24}/>} iconPosition="start" label="Investigar" {...a11yProps(1)}  sx={{ ...tabStyles, ...(value === 1 && selectedTabStyles),  color: `${value === 0 ? theme.palette.text.main : theme.palette.background.main}` }}/>
        </Tabs>
      </Box>
      <BoxContainer color={`${value === 1 ? theme.palette.secondary.main : theme.palette.accent.main}`} type={'section'} height={'38.0625rem'} width={'70.5rem'} radius={'0 1.25rem 1.25rem 1.25rem'} sx={{overflow: 'hidden', marginBlockEnd: '1.875rem'}}>
          <CustomTabPanel value={value} index={0}>
            {
              currentLocation === '/' ? (
                <HomeContainer projects={projects}/>
              ) : (
                <VerticalTabs project={project}/>
              )
            }
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            
          </CustomTabPanel>
      </BoxContainer>
    </Box>
  );
};

BaseTabs.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  projectSelected: PropTypes.object
}

export default BaseTabs;
