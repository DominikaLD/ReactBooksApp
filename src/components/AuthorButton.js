import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorButton = () => {
  const navigate = useNavigate();

  const navigateToTable = () => {
    navigate('author');
  };

  return (
    <div className="d-grid gap-2">
      <button  className="btn btn-outline-warning" type="button" onClick={navigateToTable}>
      SEARCH BY AUTHOR 
      </button>
    </div>
  );
};

export default AuthorButton;
