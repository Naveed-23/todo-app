import SignUpForm from "../features/user/SignUpForm";
import LoginLayout from "../ui/LoginLayout";

export default function SignUp() {
    return (
        <LoginLayout>
            <label className="block text-slate-100 text-lg font-semibold mb-[-1rem] text-center md:text-left">
                Signup for an account
            </label>
            <SignUpForm />
        </LoginLayout>
    );
}
