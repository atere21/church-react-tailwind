import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700 text-4xl'>Send us a message</h2>
      <p className='text-center py-2 text-blue-700 font-bold'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img
          src='https://media.istockphoto.com/id/847575018/photo/group-of-people-holding-hands-praying-worship-believe.jpg?s=612x612&w=0&k=20&c=hbklAfDraUwmVBE6X0DAOnc9uu_QAIIe4z3drqyM1LA='
          alt='/'
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
        />
      
        <form action="https://getform.io/f/184c2acc-90fb-4ead-9cdc-ed9cafd676a5" method="POST">
      
          <div className='grid grid-cols-2'>
            <input className='border m-2 p-2' name='first' type='text' placeholder='First' />
            <input className='border m-2 p-2' name='last' type='text' placeholder='Last' />
            <input className='border m-2 p-2' name='email' type='email' placeholder='Email' />
            <input className='border m-2 p-2' name='phone' type='tel' placeholder='Phone' />
            <input className='border col-span-2 p-2 m-2' name='text' type='text' placeholder='Address'/>
            <textarea className='border col-span-2 m-2 p-2 resize-none' name='textarea' cols='30' rows='10'></textarea>
            <button className='col-span-2 m-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
