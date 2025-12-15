export default async function Room(props : {params : Promise<{roomId : string}>}){
  const {roomId} = await props.params;
  return <div>
    {roomId}
  </div>
}