import React from 'react'

const ExpContent =({id,activeTab,children}) => {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
};


export default ExpContent;