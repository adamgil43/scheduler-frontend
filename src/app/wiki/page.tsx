import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";

type MyPageProps = {
  data: any;
};

export default function Wiki({ data }: MyPageProps, context: GetServerSidePropsContext) {
  const [message, setMessage] = useState("Hi");
  useEffect(() => {
    if (context.req) {
      console.log('Server-side render');
    } else {
      console.log('Client-side render');
    }
  }, [context.req]);

  return (
    <h1>{message}</h1>
  )
}
