import React from 'react';
import { Main  } from '../../src/main';
import { WhiteListComp } from '../../src/view/whitelist';
const Home = () => {
    return (
        <Main children={<WhiteListComp></WhiteListComp>}></Main>
    )
}

export default Home;