import React from 'react';
import jobs from '../jobs';
import Data from './Data';

function Timeline(props) {
  return (
    <div className='main-div'>
      <div className='header'>
        <p className='para'>Experiense</p>
        <div className='icon'>
          <i className='fa fa-plus plus'></i>
          <i className='fa fa-pen pen'></i>
        </div>
      </div>
      <div className='section'>
        {jobs.map((item) => {
          return (
            <Data
              company={item.company}
              startDate={item.startDate}
              endDate={item.endDate}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
