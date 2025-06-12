import React, {useState} from 'react';
export const DocumentsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>DOCUMENTS - Documents - photos, reports, plans</h2><p>photos</p></div>
};
export default DocumentsView;
