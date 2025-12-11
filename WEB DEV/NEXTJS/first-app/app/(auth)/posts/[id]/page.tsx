import axios from "axios"

export default async function getPost(props : {params : Promise<{id : string}>}){
  
  const {id} = await props.params;

  const post = await axios.get(`https://dummyjson.com/posts/${id}`);

  return <div>
    <div className="text-center font-bold my-5">{post.data.title}</div>
    <div>{post.data.body}</div>
  </div>
}