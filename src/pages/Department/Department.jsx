import React from 'react'
import { Select, Option } from "@material-tailwind/react";

function Department() {
  return (
    <>
      <div>Department</div>


      <div className='w-full h-[20px]'>
        <div className="w-72">
          <Select label="Stream">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
          </Select>
        </div>

        <div className="w-72">
          <Select label="Stream">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
          </Select>
        </div>

        <div className="w-72">
          <Select label="Stream">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
          </Select>
        </div>
      </div>
    </>



  )
}

export default Department