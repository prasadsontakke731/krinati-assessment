import { margin } from '@mui/system';
import React from 'react';

function Data(props) {
  return (
    <>
      <div className='data'>
        <h1>{props.company}</h1>
        <h4>{props.startDate}</h4>
        <h3>{props.endDate}</h3>
        <h3>{props.title}</h3>
      </div>
    </>
  );
}

export default Data;
