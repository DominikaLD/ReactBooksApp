import * as React from 'react';
import AuthorButton from '../components/AuthorButton';
import CategoryButton from '../components/CategoryButton';
import TitleButton from '../components/TitleButton';
import Breadcrumbs from '../components/Breadcrumbs';


const Main = () => {
  return (
    <div className='container text-center' >
      <Breadcrumbs/>
    <div className='container-hederPage'>
        <h1 className="display-4">Book Finder</h1>
    </div>
    <div>
      <AuthorButton/>
      <CategoryButton/>
      <TitleButton/>
    </div>
    </div>
  )
};

export default Main;
