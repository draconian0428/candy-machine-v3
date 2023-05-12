import React from 'react';
import { Main  } from '../../src/main';
import { HomeComp } from '../../src/view/home';
const Home = () => {
    return (
        <Main children={<HomeComp></HomeComp>}></Main>
    )
}

export default Home;