function Toggle({toggle}){

  return <>
    <button onClick={()=>{
      toggle(prev => !prev)
    }}>Tooggle</button>
  </>

}

export default Toggle;