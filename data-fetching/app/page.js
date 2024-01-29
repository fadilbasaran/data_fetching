
import React from 'react'

export const getData = async ()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts/1',{
  });
  return res.json();

}
export const getOtherData = async ()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts/2',{
  });
  return res.json();

}
export const getOtherData2 = async ()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts/3',{
  });
  return res.json();

}
async function HomePage() {
  const data =  getData();
  const data2 =  getOtherData();
  // const data3 =  getOtherData2();
  // const [dataResults1,dataResults2,dataResults3]= await  Promise.all([ data,data2,data3]);

  // console.log({dataResults1,dataResults2,dataResults3})
  return (
    <h1>Data Fetching</h1> 
  )
}

export default HomePage