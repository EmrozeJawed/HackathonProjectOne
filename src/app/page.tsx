"use client"
import Image from 'next/image';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';
import Upload from './gallery/upload';

interface UploadImage {
  event: "success"
  info: {public_id: string}
}


export default function Home() {
  // use state to change the image
  const[imageId , setImageId]= useState('cld-sample-4')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  {/* Upload Button */}
<CldUploadButton uploadPreset="zmgctfld" onUpload={(results,) => {
   let res = results as UploadImage
   setImageId(res.info.public_id) 
}} 
/>

 {/* View Image*/}
<CldImage
  width="400"
  height="400"
  src= {imageId}
  sizes="100vw"
  alt="Description of my image"
/>


    </main>
  )
}
