import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const TitleButton = () => {
    const navigate = useNavigate();

    const navigateToTable = () => {
      navigate('title');
    };

  return (
    <div  className="d-grid gap-2">
      <button  className="btn btn-outline-info" type="button" onClick={navigateToTable}>
      SEARCH BY TITLE
      </button>
    </div>
  );
};

export default TitleButton;