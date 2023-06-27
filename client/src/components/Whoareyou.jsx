import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { BuildingLibraryIcon,UserIcon,WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


export default function Whoareyou() {
  return (
    <div className="bg-primary w-full overflow-hidden text-white ">
    
     
    
    <Card className="mt-6 w-96 w-100 m-10">
      <CardBody className='flex items-center justify-center'>
        <BuildingLibraryIcon className="text-primary w-12 h-12 mb-4  " />
        <Typography variant="h5" color="blue-gray" className="font-poppins mb-2 text-center text-primary">
         Admin
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-center">
        <a href="/loginadmin" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 font-poppins text-primary ">
            Login
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card> 
    <Card className="mt-6 w-96 w-100 m-10">
      <CardBody className='flex items-center justify-center'>
        <UserIcon className="text-primary w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center text-primary">
         User
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-center">
        <a href="/loginuser" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 font-poppins text-primary">
            Login/signup
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card> 
    <Card className="mt-6 w-96 w-100 m-10">
      <CardBody className='flex items-center justify-center'>
        <WrenchScrewdriverIcon className="text-primary w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center text-primary">
         Service Provider
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-center">
        <a href="/loginservice" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 font-poppins text-primary">
            Login/signup
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card> 
    </div>
    
  )
}

