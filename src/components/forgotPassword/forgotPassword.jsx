import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const onSubmit = async (data) => {
    try {
        console.log(apiUrl);
        const response = await axios({
          method: "post",
          url: `${apiUrl}/api/reset-password`,
          data: { "email": data.email },
        });
        console.log(response);
        toast.success("Check your Email")
        
    } catch (error) {
        toast.error(error.message);
    }
  };

  return (
    <>
      <h1 className="sign-heading">Get New Password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-row">
          <div className="custom-input">
            <label htmlFor="email">Username or Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>

        <div className="login-btn">
          <input type="submit" value="Get New Password!" />
        </div>
      </form>
    </>
  );
};
