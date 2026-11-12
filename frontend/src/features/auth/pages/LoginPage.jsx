

function LoginPage() {


    return (
        <>
            <h1>Login Page</h1>
            <p>Welcome</p>

            <form action="">
                <div>
                    <input type="text" name="firstName" id="" placeholder="Arthur" required/>

                    <input type="text" name="lastName" id="" placeholder="Morgan" required/>
                </div>

                <br />

                <input type="email" name="email" id="" placeholder="Arthur@exemple.fr" required/>
                <br />

                <input type="password" name="password" id="" placeholder="8+ characters" required/>
                <br />

                <input type="checkbox" name="checkbox" id="" required/>
                <br />

                <button type="submit">Create an account</button>
            </form>
        </>
    );
}

export default LoginPage;