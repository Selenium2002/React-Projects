// import Header from "@/components/Header";
// import Description from "@/components/Description";
// import Footer from "@/components/Footer";
// import Link from "next/link";
'use client';
import {  useEffect, useState, useRef } from "react";

const Home = () => {
  // const [counter, setCounter] = useState<number>(0);
  // const [success, setSuccess] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // const handleCounter = ()=> {
  //   setCounter(counter + 1)
  //   if(counter === 10){
  //     setSuccess(true);
  //   }
  // }
  const handleClick = ()=> {
    if(inputRef.current){
      inputRef.current.focus();
    }
    console.log(inputRef.current?.value);
  }

  const handleChange = (e)=>{
    console.log(e.target.value);  
  }


  // useEffect(()=>{
  //   console.log("# Event is Success");
  // },[success])

  // useEffect(()=>{
  //   console.log("## Counter is Triggered");
  // },[counter])

  return (
    <main className="bg-sky-950 text-white h-screen">
      <h1 className="text-3xl">Home</h1>
      {/* <div>Counter: {counter}</div> */}
      <input className="bg-gray-300 p-1 mx-2 border-none rounded-sm text-black" ref={inputRef} onChange={handleChange}/>
      <button className="border rounded-xl p-3 cursor-pointer my-2 hover:bg-gray-600 active:bg-gray-800" onClick={handleClick}>Click to Focus</button>
      {/* <Header text="Hello from Header"/>
      <Description />
      <Footer />
      <Link href="/about" className="hover:text-sky-200 focus:text-sky-300">Go To About</Link> */}
    </main>
  );
}
export default Home;