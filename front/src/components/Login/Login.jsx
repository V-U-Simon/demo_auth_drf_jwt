import { useForm } from "react-hook-form";
import { login } from "../../services/auth";
import { useNavigate, redirect } from "react-router-dom";
import { useState } from "react";
import InputUsername from "./InputUsername";
import InputPassword from "./InputPassword";
import { ButtonSubmit, ButtonLoading } from "../../uikit/Button";

export default function Login(props) {
  // let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        // onSubmit={handleSubmit(handleLogin)}
      >
        <InputUsername register={register} errors={errors} />
        <InputPassword register={register} errors={errors} />
        <div className="mt-4">
          <ButtonSubmit>Login</ButtonSubmit>
        </div>
      </form>
    </div>
  );
}

// function ButtonSubmit() {

//   return (
//     <button
//       type="submit"
//       className={`bg-blue-500 text-white p-2 rounded w-full ${
//         loading ? "opacity-75 cursor-not-allowed" : "hover:bg-blue-600"
//       }`}
//       disabled={loading}
//     >
//       {loading ? "Loading..." : "Login"}
//     </button>
//   );
// }

// function ButtonLoadin() {
//   return ()
// }
