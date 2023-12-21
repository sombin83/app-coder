import React from "react";
import Link from "next/link";

const getePosts = async() => {

const response = await fetch('https://jsonplaceholder.typicode.com/posts_error', {cache: "no-store", next: {revalidate:0}})


if (!response.ok){

  throw new Error("fallo la obtencion de datos")
}

return response.json()


}



const Posts = async () => {

        const posts = await getePosts()

    return (
        <>
          <main className="container mx-auto px-auto mt-5">

          <div className="p-4 mx-auto mt-5">
          <h1 className="pl-40 mb-5 text-4xl font-extrabold text-neutral-500">Aca van los posts</h1>
          <hr />

          <ul>
            {
              posts.map((post)=>(
                <Link href={`/posts/${post.id}`}>
                <li key={post.id}>
                    {post.id} - {post.title}

                </li>
                </Link>
              ))

            }
          </ul>


          </div>
         
          </main>
            
        </>

    )


}

export default Posts