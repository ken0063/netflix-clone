import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Inputs } from "../typing";

export default function Login() {
  const [login, setLogin] = useState<boolean>(false);
  const { signIn, signUp, error, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/p2hphi"
        fill
        alt=""
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute object-contain cursor-pointer left-4 top-4 md:left-10 md:top-6 "
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative px-6 py-10 mt-24 space-y-8 rounded bg-black/75 md:mt-0 md:max-w-md md:px-14"
      >
        <h1>Sign In</h1>
        <div className="text-center text-red-500">
          {error === "auth/user-not-found" ? "User not found" : error}
        </div>
        <div className="space-y-4 ">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="loginValidation">Please enter a valid email.</p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 60,
              })}
            />
            {errors.password && (
              <p className="loginValidation">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold disabled:bg-[#e50914]/60"
          onClick={() => setLogin(true)}
          disabled={loading}
        >
          <div className="flex items-center justify-center">
            {loading && (
              <div>
                <p className="w-4 h-4 mr-4 border rounded-full animate-spin border-l-transparent"></p>
              </div>
            )}
            Sign In
          </div>
        </button>

        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
