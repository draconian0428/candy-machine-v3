import React from 'react';
import { Main  } from '../../src/main';
import { HomeMint } from '../../src/Home';
import { rpcHost, candyMachineId, network } from "../../src/config";
const Home = () => {
    return (
        <Main children={<HomeMint candyMachineId={candyMachineId} />}></Main>
    )
}

export default Home;