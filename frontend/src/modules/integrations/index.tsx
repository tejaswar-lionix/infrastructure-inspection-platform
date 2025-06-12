import React, {useState} from 'react';
export const IntegrationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INTEGRATIONS - Integrations - GIS, sensors, drones</h2><p>GIS</p></div>
};
export default IntegrationsView;
