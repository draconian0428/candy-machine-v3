import { useRouter } from 'next/router';
import {Header} from "../../components/header";
// import {PublicPage} from "../../view/public";

import {Footer} from "../../components/footer";

import styled from "styled-components";
import { Column } from "../../components/element";

const Wrapper = styled(Column)`
  width: 100%;
  justify-content: space-between;
  height: 100vh;
  background-color: #fdf9e5;
`;

const PublicLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <Wrapper>
      <Header />
      {
        children
      }
      <Footer />
    </Wrapper>
  );
};
export default PublicLayout;
