export default async function Course(props : {params : Promise<{requests : string[]}>}){
  const {requests} = await props.params;
  return <div>
    {JSON.stringify(requests)};
  </div>
}