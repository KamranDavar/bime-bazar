import PersonalInfoForm from '@/components/PersonalInfoForm'

async function getAddresses() {
  const res = await fetch('https://front-end-task.bmbzr.ir/my-addresses/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getAddresses()

console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <PersonalInfoForm addresses={data}/>
    </main>
  )
}
