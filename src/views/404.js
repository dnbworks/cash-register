import React from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

const Default = () => {
  // how to log the default component props
  const history = useHistory();
  console.log(useHistory());
  return (
    <div className='container'>
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className='dispaly-4'>404</h1>
          <h1>Error</h1>
          <h2>Page not found</h2>
          <p>The requested URL <span>{ history.location.pathname }</span> was not found</p>
        </div>
      </div>
    </div>
  );
};

export default Default;