import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/navbar"
import RegisterForm from "@/components/register/form"

export default function SignIn(){
    return <>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar/>
        <main style={{ flex: 1 }}>
                <RegisterForm />
            </main>
        <Footer/>
        </div>
    </>
}