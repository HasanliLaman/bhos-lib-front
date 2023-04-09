import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Wrong email format.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@bhos.edu.az$/,
      "You can only register with BHOS email."
    )
    .required("This field is required."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]{5,15}$/,
      "Password must include minimum 5 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
    )
    .required("This field is required."),
});
