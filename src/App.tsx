import { useState } from "react";

import styled from "styled-components";

import Headers from "./components/Headers";
import People from "./components/People";
import data from "./data.json";

function App() {
  console.log(data);

  const [notifications, setnotifications] = useState(data.notifications);

  return (
    <MainConteiner>
      <Headers
        setnotifications={setnotifications}
        notifications={notifications}
      />

      {notifications.map((item) => {
        return (
          <People key={item} setnotifications={setnotifications} item={item} />
        );
      })}
    </MainConteiner>
  );
}
const MainConteiner = styled.div`
  width: 375px;

  background: #fff;
  padding: 24px 16px;
  @media only screen and (min-width: 1440px) {
    width: 730px;

    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: var(--9---White, #fff);
    box-shadow: 0px 20px 60px 0px rgba(73, 97, 168, 0.05);
    padding: 30px;
  }
`;

export default App;
