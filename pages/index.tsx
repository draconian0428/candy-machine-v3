import React, { useEffect,  useRef } from "react";
import { useRouter } from 'next/router';
const IndexPage = ({}) => {

  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [])

  return (
    <>
      
    </>
  );
};

export default IndexPage;
