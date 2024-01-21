import React from 'react';

function Stats({ toDoList }) {
  let countList = toDoList.length;

  return (
    <div className="stats">
      <p className="notify">
        {countList === 0
          ? `You got everythink!`
          : `You have ${countList} items on your list.`}
      </p>
    </div>
  );
}

export default Stats;
