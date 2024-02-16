import React from 'react'
import { Input } from '../../../../components/input'
import { SearchIcon } from '../../../../assets/icon/search-icon'
export const InputHeader = () => {
  return (
    <div className="relative">
    <Input type="text" variant="secondary" className="w-full" />
    <button className=" absolute right-[5px] top-[5px] rounded-full bg-secondary px-[19px] py-[18px]">
      <SearchIcon />
    </button>
  </div>
  )
}
