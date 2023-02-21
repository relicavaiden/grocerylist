import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { use, useState } from 'react'

export default function Home() {

  const [ items, setItems ] = React.useState([]);
  const [ tempText, setTempText ] = React.useState<string>();

//   const addItem = (text: string) => {
//     setItems([...items, text]);
//   };
  return (


    <>
      <Head>
        <title>Discord Shopping Board</title>
        <meta name="description" content="Team project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="" href="" />
      </Head>
      <main>
        <section className='navbar'>
          <h1>Discord Shopping List</h1>
        </section>
        <section className='navItems'>
          <ul>
            <li><a href=''>Fruits</a></li>
            <li><a href=''>Vegetables</a></li>
            <li><a href=''>Meat</a></li>
            <li><a href=''>Dairy</a></li>
            <li><a href=''>Meal Prep</a></li>
          </ul>
        </section>
        <div className='main'>
          <h1>Add your items</h1>
          <form className="searchBox">
<!--             <input type="text" value={tempText} placeholder='What are we shopping for' onChange={(e) => { -->
<!--               setTempText(e.target.value); -->
<!--             }}/> -->
            <button onClick={() => {
              addItem(tempText);
              setTempText('');
            }}>Submit</button>
          </form>
          <div>
            <ul>
              {items.map((item, idx) => {
                return (
                  <li key={idx}>{item}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
