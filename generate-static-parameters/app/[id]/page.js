import React from 'react'

export const getAllPosts=async ()=>(await (fetch('https://jsonplaceholder.typicode.com/posts'))).json();
export const getPostById=async (id)=>(await (fetch(`https://jsonplaceholder.typicode.com/posts/${id}`))).json();
async function BlogPage({params}) {
  console.log("Inside the page:",params.id)
  const data =await getPostById(params.id);
  return (
    <>
    <h1>
      Title:{data.title}
    </h1>
    </>
  )
}

export default BlogPage;

export async function generateStaticParams(){
  console.log("Inside the generateStaticParams",)
  const posts = await getAllPosts();
  return posts.map(post=>({id: `${post.id}`}))
}//Sayfalrı daha site ilk açıldığında yüklemesine olanak sağlayan fonksiyondur
 