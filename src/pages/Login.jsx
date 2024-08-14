import LoginForm from "../features/user/LoginForm";
import LoginLayout from "../ui/LoginLayout";

export default function Login(){

    return <LoginLayout>
        <label htmlFor="" className="block text-slate-100 text-lg font-semibold mb-[-1rem]">
        Login to your account
        </label>
        <LoginForm />
    </LoginLayout>
}