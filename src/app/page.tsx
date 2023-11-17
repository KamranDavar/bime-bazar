import PersonalInfoForm from '@/components/PersonalInfoForm'

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  md:justify-center ">
     <PersonalInfoForm/>
    </main>
  )
}
