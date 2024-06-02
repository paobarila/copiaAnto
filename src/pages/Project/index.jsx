import React from 'react';
import BaseLayoutHome from '../../components/templates/LayoutHome/BaseLayoutHome';
import PropTypes from 'prop-types';
import BaseTabs from '../../components/molecules/Tabs';
import { useParams } from 'react-router-dom';

const Project = ({projects}) => {

  const { id }  = useParams();

  const projectSelected = projects.find((project) => project.projectId === parseInt(id));

  if (!projectSelected) {
    return (
      <BaseLayoutHome>
        <p>Proyecto no encontrado</p>
      </BaseLayoutHome>
    );
  }

  return (
    <BaseLayoutHome>
      <BaseTabs projectSelected={projectSelected} />
    </BaseLayoutHome>
  );
};

Project.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      projectId: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Project;