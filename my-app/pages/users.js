import Link from 'next/link'

function PostList({posts}) {
    return (
        <>
            <h1>List of Posts</h1>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                                <h2>
                                    {post.id}
                                    {post.title}
                                </h2>
                                <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: {
            posts: data.slice(0,10)
        }
    }
}
