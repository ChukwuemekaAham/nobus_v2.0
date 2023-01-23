import Head from "next/head";
import React from "react";
import useFetch from "../components/useFetch";
import UserList from "../components/UserList";
import HeaderRegister from "../components/HeaderRegister";
import Footer2 from "../components/Footer2";

const userhome = () => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:8000/users");

  return (
    <section>
      <Head>
        <title>Nobus | Userhome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <HeaderRegister />
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {users && <UserList users={users} />}
      </div>
      <Footer2 />
    </section>
  );
};

export default userhome;
