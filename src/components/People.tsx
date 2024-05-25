/* eslint-disable react/prop-types */
import styled from "styled-components";

function People({ item, setnotifications }) {
  const handleClick = () => {
    setnotifications((prevNotifications) => {
      const updatedNotifications = prevNotifications.map((notification) => {
        if (notification.id === item.id) {
          return { ...notification, isUnread: false };
        }
        return notification;
      });
      return updatedNotifications;
    });
  };

  return (
    <Personsdiv
      onClick={handleClick}
      style={{
        backgroundColor: item.isUnread ? "#F7FAFD" : "#fff",
      }}
    >
      <div className="hsad">
        <img src={item.profilePic} alt={item.senderName} />

        <div className="informationdiv">
          <div className="informationdiv-1">
            <p className="main-span">
              <span className="name">{item.senderName}</span>
              <span className="reaceted">{item.action} </span>
              <span className="post">{item.post}</span>
              <span className="groupName">{item.groupName}</span>
              {item.isUnread && <button>{item.isUnread}</button>}
            </p>
            <span className="time">{item.time}</span>
          </div>
        </div>
        {item.userPicture && (
          <div className="kim-img">
            <img src={item.userPicture} alt="" />
          </div>
        )}
      </div>
      {item.text && (
        <div className="second">
          <span className="text">{item.text}</span>
        </div>
      )}
    </Personsdiv>
  );
}

const Personsdiv = styled.div`
  margin-top: 20px;
  padding: 10px;
  gap: 13px;
  border-radius: 8px;
  max-width: 343px;

  flex-shrink: 0;

  .kim-img {
    img {
      width: 39px;
      height: 39px;
      border-radius: 7px;
      background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    }
  }
  .second {
    width: 263px;
    padding: 16px;
    margin-top: 12px;
    margin-left: auto;
    border-radius: 5px;
    border: 1px solid var(--7---Very-Light-Grey-Blue, #dde7ee);
    background: var(--9---White, #fff);

    .text {
      color: var(--5---Grey-Blue, #939cad);
      font-feature-settings: "clig" off, "liga" off;
      font-family: "Plus Jakarta Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .second:hover {
    background: #e5effa;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 39px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }

  .hsad {
    display: flex;
    gap: 10px;
  }

  .informationdiv {
    display: flex;
    gap: 4px;

    .informationdiv-1 {
      display: flex;
      flex-direction: column;

      .main-span {
        .name {
          color: var(--3---Very-Dark-Grey-Blue, #1c202b);
          font-size: 14px;
          font-weight: 800;
        }

        .reaceted {
          color: var(--4---Dark-Grey-Blue, #5e6778);
          font-family: "Plus Jakarta Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          margin-left: 6px;
          line-height: normal;
        }
        .groupName {
          color: var(--1---Blue, #0a327b);
          font-family: "Plus Jakarta Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        .post {
          color: var(--4---Dark-Grey-Blue, #5e6778);
          font-family: "Plus Jakarta Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          margin-left: 6px;
          line-height: normal;
        }

        button {
          width: 8px;
          height: 8px;
          border: none;
          margin-left: 6px;
          border-radius: 50%;
          background-color: #f65552;
        }
      }

      .time {
        color: var(--5---Grey-Blue, #939cad);
        font-feature-settings: "clig" off, "liga" off;

        font-family: "Plus Jakarta Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    max-width: 670px;
    max-height: 192px;

    .informationdiv-1 {
      flex-direction: row;
    }
  }
`;

export default People;
