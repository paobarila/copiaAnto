// import React, {useState, useEffect} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import BaseLayoutHome from '../../components/templates/LayoutHome/BaseLayoutHome';
import BaseTabs from '../../components/molecules/Tabs';

//simulación de base de datos
// import data from '../../data/projects/projectEmpty.json';
// import data from '../../data/projects/oneProject.json';
// import data from '../../data/projects/projects.json';


const Home = ({projects}) => {
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     setProjects(data.projects);
    // }, [])

  return (
    <BaseLayoutHome>
      <BaseTabs projects={projects}/>
    </BaseLayoutHome>
  )
}

Home.propTypes = {
  projects: PropTypes.array
}

export default Home