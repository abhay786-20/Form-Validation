import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email : Yup.string().email().required("Please enter your email"),
    password : Yup.string().min(8).required("Must Contain 8 Characters",),

    confirm_password : Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match")
});