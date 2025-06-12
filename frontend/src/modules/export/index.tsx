import React, {useState} from 'react';
export const ExportView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EXPORT - Export - PDF, wiki, JSON, book</h2><p>PDF</p></div>
};
export default ExportView;
