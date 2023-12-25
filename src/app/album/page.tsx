import React from 'react'
import cloudinary from "cloudinary"
import FolderList from './folderlist';

export interface FolderType {
   name: string;
   path: string;
}
const Page = async () => {
const {folders} = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderType[];
}

  return (
    <>
      <div className='py-4 px-5'>
    <h2 className="text-3xl font-semibold tracking-tight">
      Picture Albums
    </h2>
  </div>
  {/* data folders */}
  <div className="grid grid-cols-3 gap-4 py-4 px-5">
    {folders.map((item, i) => { 
       return (
        <div key={i}>
            <FolderList folder={item} />  
    </div>
    );
    })};
  </div>
  </>
  );
};

export default Page