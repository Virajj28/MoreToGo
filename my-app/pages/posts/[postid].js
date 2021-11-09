function Post({ post }) {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p> 
        </>
    );

}

export default Post;

export async function getStaticPaths() {
    return {
        props: {
            paths: [
                {
                    params: { postId: '1' }
                }
            ]
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return {
        props: {
             // this will be passed to the page component as props
            post:data
        }
    }
}