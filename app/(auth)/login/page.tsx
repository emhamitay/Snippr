import React from 'react';

function page() {
  return (
    <>
        <div className='w-xl bg-sky-100 p-8 border-sky-200 border rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold mb-4 text-sky-900'>Login</h1>
            <form className='space-y-4'>
                <div className='flex flex-row justify-center items-center'>
                    <label className='p-5 w-32 block text-sm font-medium text-sky-700'>Username</label>
                    <input type='text' className='mt-1 bg-sky-50 block w-full border border-sky-200 rounded-md shadow-sm p-2' />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <label className='p-5 w-32 block text-sm font-medium text-sky-700'>Password</label>
                    <input type='password' className='mt-1 bg-sky-50 block w-full border border-sky-200 rounded-md shadow-sm p-2' />
                </div>
            </form>
        </div>
    </>
  );
};
export default page;