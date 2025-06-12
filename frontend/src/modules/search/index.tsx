import React, {useState} from 'react';
export const SearchView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SEARCH - Search - entities, full-text, filters</h2><p>full-text</p></div>
};
export default SearchView;
