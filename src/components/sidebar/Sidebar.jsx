import React from 'react'
import TopSidebar from './TopSidebar'
import Bottombar from './bottombar';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[275px] h-auto  border-r-[1.5px] justify-between items-center py-[25px] sticky">
          <TopSidebar />
          <Bottombar/>
    </div>
  );
}

export default Sidebar