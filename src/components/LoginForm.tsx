export const LoginForm = ({ userForm }: any) => {

    return (
        <div className={`${userForm === 'Login' ? "block duration-700 opacity-100 absolute top-1/2 left-1/2 form-translate z-10" : "opacity-0 scale-0 absolute"}`}>
            <div className="flex justify-center mt-5">
                <form className="p-16 bg-base-200 rounded-3xl text-center flex flex-wrap w-2/5 h-3/6 justify-center">
                    <h1 className="text-3xl">Sign In</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input-bordered w-full max-w-xs mb-3 mt-3"
                    /><br />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs"
                    /><br />
                    <input type="button" value="Login" className="btn mt-5 btn-wide text-lg bg-info" />
                    <div className="flex w-full justify-between">
                        <input type="button" className="btn btn-xs btn-link" value="Forgot Password?"/>
                        <input type="button" className="btn btn-xs btn-link" value="Register"/>
                    </div>
                </form>
            </div>
        </div>
    )
}