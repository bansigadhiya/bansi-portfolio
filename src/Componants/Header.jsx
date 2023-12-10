import React from 'react';
import { ChevronsRight } from 'feather-icons-react/build/IconComponents';

const Header = () => {
    return (
        <div className='container'>
            <div className='w-full h-[60px] flex items-center justify-between'>
                <div>
                    <h1 className='font-medium'>BANSI</h1>
                </div>
                <div className='flex menu items-center text-sm space-x-7'>
                    <a className='cursor-pointer font-medium h-[60px] flex items-center'>
                        Home
                    </a>
                    <a className='cursor-pointer font-medium h-[60px] flex items-center'>
                        About
                    </a>
                    <a className='cursor-pointer font-medium h-[60px] flex items-center'>
                        Services
                    </a>
                    <a className='cursor-pointer font-medium h-[60px] flex items-center'>
                        Contact
                    </a>
                </div>
                <div>
                    <button className='uppercase btn hover:shadow-lg flex items-center'>
                        hire me
                        <ChevronsRight className="w-4 h-4 ms-1"/>
                        <div className="btn-bg"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header