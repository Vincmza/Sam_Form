import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {register, formState: { errors },handleSubmit  } = useForm();
    const [userInfo, setUserinfo] = useState("");
    
    const onSubmit = (data) => {
        setUserinfo(data);
      
    };

    return (
        <main className="container">
            <div className="first-bloc">
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how
                    developers think is invaluable.
                </p>
            </div>

            <div className="second-bloc">
                <h2>
                    <strong>Try it free 7 days</strong> then $20/mo.
                </h2>

                <div className="formContainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Nom"
                                {...register("lastname", { required: true })}
                            />
                        </div>
                        <div>
                        <p className="error">
                            {errors.lastname?.type === "required" &&
                                "Ce champs est obligatoire "}
                        </p>


                        </div>
                        
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Prénom"
                                {...register("username", { required: true })}
                            />
                        </div>
                        <div>
                        <p className="error">
                            {errors.username?.type === "required" &&
                                "Ce champs est obligatoire "}
                        </p>
                        </div>
                        

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                        </div>
                        <div>
                        <p className="error">
                            {errors.email?.type === "required" &&
                                "Email obligatoire "}
                        </p>
                        <p className="error">
                            {errors.email?.type === "pattern" &&
                                "Format de l'email incorrect "}
                        </p>
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Mot de passe"
                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                })}
                            />
                            <div>
                            <p className="error">
                                {errors.password &&
                                    errors.password.type === "required" && (
                                        <span>
                                            Le mot de passe est obligatoire
                                        </span>
                                    )}
                                {errors.password &&
                                    errors.password.type === "minLength" && (
                                        <span>
                                            Le mot de passe doit contenir min 8
                                            caractères
                                        </span>
                                    )}
                            </p>

                            </div>
                            
                        </div>
                        <div className="btn">
                            <input
                                type="submit"
                                className="formButton"
                                value="CLAIM YOUR FREE TRIAL"
                            />
                        </div>
                        <p className="condition">
                            By clicking the button, you are agreeing to our
                            <span className="important">
                                {" "}
                                Terms and Services
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Signup;
