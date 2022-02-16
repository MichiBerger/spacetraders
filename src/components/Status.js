
export default function Status({isGreen}){
  return (
    <section>
      Status: <div>{isGreen ? 'green' : 'red'}</div>
      </section>
  )
}