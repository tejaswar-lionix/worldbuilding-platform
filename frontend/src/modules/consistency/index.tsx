import React, {useState} from 'react';
export const ConsistencyView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CONSISTENCY - Consistency - flags contradictions, born</h2><p>born 1990 war 1985</p></div>
};
export default ConsistencyView;
