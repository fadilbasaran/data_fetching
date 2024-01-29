export const getOtherData = async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts/2',{
    });
    return res.json();
  
  }

  async function Test(){
    const data2= await getOtherData();

    return <h1>Data:{data2.title}</h1>
  }

  export default Test;