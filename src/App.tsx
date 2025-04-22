// import { joiResolver } from "@hookform/resolvers/joi";
// import { Button, FloatingLabel } from "flowbite-react";
// import { useForm } from "react-hook-form";
// import { loginSchema } from "./validations/login.joi";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// type FormData = {
//   email: string;
//   password: string;
// };

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm<FormData>({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     mode: "onChange",
//     resolver: joiResolver(loginSchema),
//   });

//   const submitForm = async (data: FormData) => {
//     try {
//       const response = await axios.post(
//         "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
//         data
//       );
//       console.log("Login success:", response.data);
//       toast.success("Login successful!");
//       // Optional: localStorage.setItem("token", response.data.token);
//       // Optional: redirect user
//     } catch (error: any) {
//       console.error("Login failed:", error.response?.data || error.message);
//       toast.error("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
//       <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 w-full max-w-md">
//         <FloatingLabel
//           {...register("email")}
//           variant="outlined"
//           label="Email address"
//           type="email"
//           color={errors.email ? "error" : "success"}
//         />
//         {errors.email && (
//           <p className="text-sm text-red-500">{errors.email.message}</p>
//         )}

//         <FloatingLabel
//           {...register("password")}
//           variant="outlined"
//           label="Password"
//           type="password"
//           color={errors.password ? "error" : "success"}
//         />
//         {errors.password && (
//           <p className="text-sm text-red-500">{errors.password.message}</p>
//         )}

//         <Button type="submit" className="w-full" disabled={!isValid}>
//           Submit
//         </Button>
//       </form>

//       <ToastContainer position="top-center" />
//     </main>
//   );
// }
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, FloatingLabel } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { loginSchema } from './validations/login.joi';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  email: string;
  password: string;
  name: string;
  phone: string;
  biz: boolean;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
      biz: false,
    },
    mode: 'onChange',
    resolver: joiResolver(loginSchema),
  });

  const submitForm = async (data: FormData) => {
    try {
      const response = await axios.post(
        'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login',
        data
      );
      console.log('Login success:', response.data);
      toast.success('Login successful!');
      // Optional: localStorage.setItem('token', response.data.token);
      // Optional: redirect user
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <FloatingLabel
          {...register('email')}
          variant="outlined"
          label="Email address"
          type="email"
          color={errors.email ? 'error' : 'success'}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <FloatingLabel
          {...register('password')}
          variant="outlined"
          label="Password"
          type="password"
          color={errors.password ? 'error' : 'success'}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <FloatingLabel
          {...register('name')}
          variant="outlined"
          label="Full Name"
          type="text"
          color={errors.name ? 'error' : 'success'}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}

        <FloatingLabel
          {...register('phone')}
          variant="outlined"
          label="Phone Number"
          type="tel"
          color={errors.phone ? 'error' : 'success'}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('biz')}
            className="form-checkbox"
          />
          Business Account
        </label>
        {errors.biz && (
          <p className="text-sm text-red-500">{errors.biz.message}</p>
        )}

        <Button type="submit" className="w-full" disabled={!isValid}>
          Submit
        </Button>
      </form>

      <ToastContainer position="top-center" />
    </main>
  );
}
