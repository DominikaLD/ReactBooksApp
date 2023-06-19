import { Link, useLocation } from 'react-router-dom'


const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path !== '');
    
    return (
      <div>
        {paths.map((path, index) => (
          <span key={path}>
            {index > 0 && ' / '}
            <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
          </span>
        ))}
      </div>
    );
  };
export default Breadcrumbs;