import React, { useState } from 'react'
import { AiOutlineUnorderedList, AiOutlinePlus } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

import { toast } from 'react-toastify';

function Todo() {
    const [inputValue, SetinputValue] = useState('');
    const [errorMessage, SeterrorMessage] = useState('');
    const [items, Setitems] = useState([])

    const customId = "custom-id-toast_id";

    const color = {
        color: "white",
        fontSize: "24px",
        height: "1rem"
    }
    const handleInputChange = event => {
        SetinputValue(event.target.value);

    };

    const additem = () => {
        if (inputValue.trim() !== '') {
            Setitems([...items, inputValue]);
            SetinputValue('');

        } else {
            toast.error('Input value cannot be empty.', {
                toastId: customId
            })

        }

    }

    const deletehandler = (index) => {
        const updatedItems = items.slice(0, index).concat(items.slice(index + 1))
        Setitems(updatedItems)

    }
    return (

        <div className='h-screen  bg-blue-300 flex flex-col justify-center items-center gap-x-3 '>

            {errorMessage && <div className='flex justify-center lg:mx-2 mx-12 '><p className=' text-white bg-red-500 p-3 rounded-lg'>{errorMessage}</p></div>}
            <div className="flex justify-between items-center gap-x-2  lg:h-1/4 h-12 lg:w-2/6 w-4/6   lg:px-2  lg:mx-0 mx-12 ">

                <input type="text" name="text" className="text-white lg:mt-3 sm:mt-10 px-3 py-2 bg-zinc-800 border-3 shadow-sm
                 border-sky-900 placeholder-slate-400 focus:outline-none focus:border-sky-500
                  focus:ring-sky-500 block w-full  rounded-md sm:text-sm focus:ring-1" onChange={handleInputChange} placeholder="Enter something here..." value={inputValue} />
                <button className="rounded-md bg-green-600 hover:bg-green-500 lg:mt-3 mt-1" style={{ height: '2.2rem' }} onClick={additem} ><AiOutlinePlus style={color} /></button>

            </div>
            <div className=' lg:w-2/6 w-4/6 bg-white rounded-md  lg:mt-2 mt-5  lg:mx-2 mx-12 overflow-y-auto'>
                <div className='grid grid-cols-1 divide-y divide-slate-300 text-start'>
                    {items.length > 0 &&
                        <div className='px-8 py-3'>
                            <h1 className="text-2xl flex gap-x-2 align-center">
                                <AiOutlineUnorderedList size={30} />
                                Task Lists</h1>
                        </div>
                    }
                    {items.map((item, index) =>
                        <div key={index} className='px-8 py-3'>
                            <div className='flex justify-between items-center'>
                                <h6>{item}</h6>
                                <button onClick={() => deletehandler(index)}><FaTrashAlt color='red' /></button>
                            </div>
                        </div>
                    )}



                </div>
            </div>
        </div>
    )
}

export default Todo;