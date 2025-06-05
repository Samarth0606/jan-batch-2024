import React from 'react'
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


function Header() {
  return (
    <div className='bg-white dark:bg-gray-900 text-white' >
        <nav className="flex justify-between items-center px-12">
            <svg class="VXJlj" viewBox="0 0 61 61" height="49" width="49"><g clip-path="url(#a)"><path fill="#FF5200" d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"></path><path fill="#fff" fill-rule="evenodd" d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.32.5h60v60h-60z"></path></clipPath></defs></svg>
            <ul className='flex'>
                <div className='flex m-4'>
                    <span className='mt-3'> <IoSearch /> </span>
                    <li className='p-2'>Search</li>
                </div>
                <div className='flex m-4'>
                    <span className='mt-3'> <BiSolidOffer /> </span>
                    <li className='p-2'>Offer</li>
                </div>
                <div className='flex m-4'>
                    <span className='mt-3'> <FaShoppingCart /> </span>
                    <li className='p-2'>Help</li>
                </div>
                <div className='flex m-4'>
                    <span className='mt-3'> <CgProfile /> </span>
                    <li className='p-2'>Signin</li>
                </div>
                <div className='flex m-4'>
                    <span className='mt-3'> <IoCartOutline /> </span>
                    <li className='p-2'>Cart</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Header