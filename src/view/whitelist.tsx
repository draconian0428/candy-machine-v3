import styled from "styled-components";
import { Column } from "../components/element";
// import ButtonGroup from "../../components/RadioGroup";
// import { Table, useModal } from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Home from "../../components/home";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { ModalContent } from "../../components/modal";

export const WhiteListComp = () => {
  // const wallet = useWallet();
  // eslint-disable-next-line no-undef
  // const API = process.env.REACT_APP_API || undefined;
  // const [userlist, setUserlist] = useState("");
  // const [flag, setFlag] = useState("");
  // const [flag2, setFlag2] = useState(0);
  // const [flag3, setFlag3] = useState(0);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const { setVisible, bindings } = useModal();
  // const columns = [
  //   { name: "ID", uid: "_id" },
  //   { name: "ADDRESS", uid: "address" },
  // ];
  // const RadioOptions = [
  //   { name: "Whitelist 1", value: "1", default: true },
  //   { name: "Whitelist 2", value: "2" },
  // ];
  // const handlechange = () => {
  //   setFlag(!flag);
  // };

  // const getUserList = async () => {
  //   try {
  //     const response = await axios.get(API + "/api/users/");
  //     console.log(response.data, "ASDfasdf");
  //     setUserlist(response.data);
  //     const res = response.data;
  //     res.map((item) => {
  //       if (item.address == wallet.publicKey) {
  //         setIsAdmin(item.admin);
  //       }
  //     });
  //     setFlag3(res.length);
  //     if (res.filter((item) => item.address == wallet.publicKey).length == 1) {
  //       setFlag2(1);
  //       res.map((item) => {
  //         if (item.address == wallet.publicKey) {
  //           setIsAdmin(item.admin);
  //         }
  //       });
  //     } else {
  //       setFlag2(0);
  //       setIsAdmin(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getUserList();
  //   if (localStorage.getItem("item2") !== "agree") {
  //     setVisible(true);
  //   }
  // }, [wallet.publicKey]);
  // console.log(isAdmin, "admin");
  return (
    <Wrapper>
      {/* {wallet.publicKey ? (
        isAdmin ? (
          <>
            {flag2 == 0 && <Home flag3={flag3} />}
            <ButtonGroup
              onChange={handlechange}
              options={RadioOptions}
              name="1"
              width="200px"
            />
            <Table
              bordered
              shadow={true}
              color="secondary"
              aria-label="Example pagination table"
              css={{
                height: "auto",
                width: "500px",
              }}
              selectionMode="multiple"
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column align="center" key={column.uid}>
                    {column.name}
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body>
                {userlist !== "" &&
                  userlist.map((item, key) => {
                    if (item.id >= 1 && item.id < 151 && !flag) {
                      return (
                        <Table.Row key={key}>
                          <Table.Cell>{item.id}</Table.Cell>
                          <Table.Cell>{item.address}</Table.Cell>
                        </Table.Row>
                      );
                    }
                    if (item.id >= 151 && item.id < 601 && flag) {
                      return (
                        <Table.Row key={key}>
                          <Table.Cell>{item.id}</Table.Cell>
                          <Table.Cell>{item.address}</Table.Cell>
                        </Table.Row>
                      );
                    }
                  })}
              </Table.Body>
              <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={5}
                onPageChange={(page) => console.log({ page })}
              />
            </Table>
          </>
        ) : flag2 == 0 ? (
          <>
            <ModalContent
              setVisible={setVisible}
              bindings={bindings}
              title="Disclaimer"
              textdata="Kosha Creations, LLC and The Shucked Up Oyster Club are not registered investment, legal, or tax advisors in the financial or investment spaces, and/or brokers/dealers. Buying or selling any cryptocurrency-related or blockchain asset, including digital collectibles, is extremely risky and could result in significant capital losses and unexpected liabilities.  Some restrictions on discounts and perks directly related to the ownership of a digital collectible may apply.  The purchase of one of our SUOC digital collectibles is not a guarantee of profit, and may lose value.  By purchasing our digital collectibles, you agree to the Project Terms & Conditions and the SUOC Digital Collectible License Agreement.  For more information on your IP rights with regard to ownership of a digital collectible, please see our Digital Asset License Agreement."
              item="item2"
            />
            <Home flag3={flag3} />
          </>
        ) : (
          <Text>Already selected</Text>
        )
      ) : (
        <Text>Please Connect With Wallet</Text>
      )} */}
      <Text>Coming Soon</Text>
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  overflow: auto;
  gap: 20px;
`;
// eslint-disable-next-line no-redeclare
const Text = styled(Column)`
  font-size: 40px;
  font-weight: 600;
  color: #5b463f;
`;