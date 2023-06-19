import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryButton = () => {
  const navigate = useNavigate();

  const navigateToTable = () => {
    navigate('category');
  };
    return (
      <div className="d-grid gap-2">
        <button  
        className="btn btn-outline-success" type="button" onClick={navigateToTable}>
        SEARCH BY CATEGORY
        </button>
      </div>
    );
  };
  
  export default CategoryButton;