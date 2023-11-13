import PersonalInfoForm from '@/components/PersonalInfoForm'
import Modal from '@/components/modal'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <PersonalInfoForm/>
     <Modal/>
    </main>
  )
}
