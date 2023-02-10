import style from "./mainstyle.module.css";

import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./FriendsList/friends.json";
import transactionData from "./TransactionHistory/transactions.json";

import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendsList } from "./FriendsList/FriendsList.jsx";
import { TransactionsHistory } from "./TransactionHistory/TransactionsHistory.jsx";
import { Counter } from "./Counter/Counter";

export const App = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.box}>
        <>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </>
      </div>
      <div className={style.box}>
        <Statistics title="Statistics" statistics={data} />
      </div>
      <div className={style.box}>
        <FriendsList friends={friends} />
      </div>
      <div className={style.box}>
        <TransactionsHistory data={transactionData} />
      </div> */}
      <div className={style.box}>
        <Counter />
      </div>
    </div>
  );
};
