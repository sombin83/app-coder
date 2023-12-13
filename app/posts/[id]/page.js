
const getPostbyID = async (id) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
        
        throw new Error("no se obtubieron datos del post")
    }

    return response.json()


}

const PostDetail = async ({ params }) => {

    const { id } = params

    const post = await getPostbyID(id)

    return (
        <div className="container w-auto">

            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
        </div>

    )


}
export default PostDetail