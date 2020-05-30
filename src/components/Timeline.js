import React, { Fragment } from 'react';

function Timeline() {
  return (
    <Fragment>
        <form id="nickname">
            <label>Your Nickname: </label>
            <input type="text"/>
        </form>
        <ul id="messages"></ul> 
        <form action="" id="text-input">
            <div id="user-is-typing-message"></div>
            <input id="m" autoComplete="off" /><button><i className="material-icons">send</i></button>
        </form>
    </Fragment>
  );
}
export default Timeline;