"use client"
import Image from 'next/image';
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';
import Upload from './gallery/upload';

interface UploadImage {
  event: "success"
  info: { public_id: string }
}


export default function Home() {
  // use state to change the image
  const [imageId, setImageId] = useState('wbgjulvmzlnh2lx94erm')
  return (
    <main className="flex md:min-h-screen flex-col items-center p-8 md:p-24">
      {/* Upload Button */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-4 h-4 mr-2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  />
</svg>
      <CldUploadButton uploadPreset="zmgctfld" onUpload={(results,) => {
        let res = results as UploadImage
        setImageId(res.info.public_id)
      }}
      />

      {/* View Image*/}
      <CldImage
        width="400"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />


    </main>
  )
}
