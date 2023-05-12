import React from 'react';
import { Main  } from '../../src/main';
import { MintComp } from '../../src/view/mint';
const Home = () => {
    return (
        <Main children={<MintComp></MintComp>}></Main>
    )
}

export default Home;