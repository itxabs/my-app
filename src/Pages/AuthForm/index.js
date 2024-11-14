import { useForm } from "react-hook-form";
import Navbar from "../../Component/NavBar";
import Footer from "../../Component/Footer";

const AuthForm = () => {

    const keys = ['Home', ' Todos', ' About us', 'Auth Form'];

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navbar keys={keys} />
            <div className="flex flex-col items-center">
                <h2>React Form</h2>

                <form className="space-y-2 p-10 bg-lime-200 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-row">
                        <div className="flex flex-col mr-2">
                            <label className="text-left font-medium" htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                name="first-name"
                                {...register("first-name", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: "Only letters are allowed"
                                    }
                                })}
                                className="border-2 border-red-500 p-2 rounded-md"
                                placeholder="First Name"
                            />
                            {errors["first-name"] && <span className="text-red-500 text-sm">{errors["first-name"].message}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-left font-medium" htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                name="last-name"
                                {...register("last-name", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: "Only letters are allowed"
                                    }
                                })}
                                className="border-2 border-red-500 p-2 rounded-md"
                                placeholder="Last Name"
                            />
                            {errors["last-name"] && <span className="text-red-500 text-sm">{errors["last-name"].message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-left mb-1 font-medium" htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            {...register("username", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._]+$/,
                                    message: "Invalid username"
                                }
                            })}
                            className="border-2 border-red-500 p-2 rounded-md"
                            placeholder="Username"
                        />
                        {errors["username"] && <span className="text-red-500 text-sm">{errors["username"].message}</span>}
                    </div>

                    <div className="flex flex-row">
                        <div className="flex flex-col mr-2">
                            <label className="text-left mb-1 font-medium" htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email"
                                    }
                                })}
                                className="border-2 border-red-500 p-2 rounded-md"
                                placeholder="john@example.com"
                            />
                            {errors["email"] && <span className="text-red-500 text-sm">{errors["email"].message}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-left mb-1 font-medium" htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                {...register("phone", {
                                    required: true,
                                    pattern: {
                                        value: /^(\+92|0)3\d{2}[\s]?\d{3}[\s]?\d{4}$/,
                                        message: "Invalid phone number"
                                    }
                                })}
                                className="border-2 border-red-500 p-2 rounded-md"
                                placeholder="Phone"
                            />
                            {errors["phone"] && <span className="text-red-500 text-sm">{errors["phone"].message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-left mb-1 font-medium" htmlFor="pass">Password</label>
                        <input
                            type="password"
                            name="pass"
                            {...register("pass", {
                                required: true,
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "At least one letter, one number, and one special character"
                                }
                            })}
                            className="border-2 border-red-500 p-2 rounded-md"
                            placeholder="Secure Password"
                        />
                        {errors["pass"] && <span className="text-red-500 text-sm">{errors["pass"].message}</span>}
                    </div>

                    <button type="submit" className="w-full border-2 border-red-500 p-2 rounded-md">Login</button>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default AuthForm;
