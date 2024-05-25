import styled from "styled-components";

function Headers({ notifications, setnotifications }) {
  function mark(prevNotifications) {
    setnotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.map((notification) => {
        return { ...notification, isUnread: false };
      });
      return updatedNotifications;
    });
  }
  return (
    <Container>
      <div className="notif">
        <h1>Notifications</h1>
        <button>
          {notifications.reduce((acc, current) => {
            if (current.isUnread) {
              acc += 1;
            }
            return acc;
          }, 0)}
        </button>
      </div>

      <Mark onClick={mark}>
        <p>Mark all as read</p>
      </Mark>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  & h1 {
    color: var(--3---Very-Dark-Grey-Blue, #1c202b);
    font-family: "Plus Jakarta Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  & button {
    width: 32px;
    height: 25px;
    border-radius: 6px;
    background: var(--1---Blue, #0a327b);
    border: none;
    color: var(--9---White, #fff);

    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .notif {
    display: flex;
    gap: 9px;
  }
`;

const Mark = styled.div`
  display: flex;

  & p {
    color: var(--4---Dark-Grey-Blue, #5e6778);
    text-align: right;
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export default Headers;
