import React from 'react';

function MenuCard(props) {
  const {menuCardProps,onClick} = props

  return (
    <div onClick={onClick} style={{backgroundColor:menuCardProps.color}} className='h-[140px] w-[260px] md:w-[200px] flex flex-col items-center justify-center gap-1 hover:shadow-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md'>
        {/* icon section */}
        <div className="text-white text-4xl">
          {menuCardProps.icon}
        </div>

        {/* title */}
        <p className="text-white">{menuCardProps.title}</p>
    </div>
  );
}

export default MenuCard;
