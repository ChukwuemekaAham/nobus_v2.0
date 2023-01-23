import React from "react";
import { useRouter } from "next/router";
import useFetch from "../components/useFetch";
import Footer2 from "../components/Footer2";
import Headerregister from "../components/HeaderRegister";
import Head from "next/head";

const userdetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: user,
    isPending,
    error,
  } = useFetch("http://localhost:8000/users/" + id);
  return (
    <section>
      <Head>
        <title>Nobus | Userdetails</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Headerregister />
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {user && (
          <article>
            <h6>{user.firstName}</h6>
            <h6>{user.lastName}</h6>
            <h6>{user.password}</h6>
            <h6>{user.confirmPassword}</h6>
            <h6>{user.email}</h6>
            <h6>{user.company}</h6>
            <h6>{user.project}</h6>
            <h6>{user.country}</h6>
            <h6>{user.city}</h6>
            <h6>{user.street}</h6>
            <h6>{user.region}</h6>
            <h6>{user.postal}</h6>
            <h6>{user.dialup}</h6>
          </article>
        )}
      </div>
      <Footer2 />
    </section>
  );
};

export default userdetails;
