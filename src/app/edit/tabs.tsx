"use client"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CldImage } from "next-cloudinary"



export function TabsDemo({ src, blur}: { src: string, blur:number}) {
  return (
    <Tabs defaultValue="orignal" className="w-full py-4 px-5">
      <TabsList className="w-full flex-wrap h-auto justify-start">
        <TabsTrigger value="orignal">Orignal</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
        <TabsTrigger value="vibrance">Vibrance</TabsTrigger>
      </TabsList>
      {/* orignal */}
      <TabsContent value="orignal">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      {/* blur */}

      <TabsContent value="blur">
        <div className="flex gap-7 justify-center py-4 ">
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{
               blur: 800
            }]}
          />
        </div>
      </TabsContent>
      {/* gray */}
      <TabsContent value="gray">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
             effects={[{
                 grayscale:true
             }]}
          />
        </div>
      </TabsContent>
      {/* oil */}
      <TabsContent value="oil">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          effects={[{
             oilPaint: true
          }]}
          />
        </div>
      </TabsContent>
      {/* improve */}
      <TabsContent value="improve">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{
              improve:true
            }]}
          />
        </div>
      </TabsContent>
      {/* vignette */}
      <TabsContent value="vibrance">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="150"
            height="150"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            effects={[{
              vibrance:true
            }]}
          />
        </div>
      </TabsContent>

    </Tabs>
  )
}
