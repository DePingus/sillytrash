import { getContext } from "../../extensions.js";
import { eventSource, event_types } from "../../../../script.js";

// Register an event listener for incoming messages
eventSource.on(event_types.MESSAGE_RECEIVED, handleIncomingMessage);

// Retrieve application context, including chat logs and participant info
const context = getContext();

function handleIncomingMessage(data) {
    // Access the most recent message from the chat log
    let mostRecentMessage = context.chat[context.chat.length - 1];
      console.log("<SillyTrash extension> THIS IS A TEST : ", mostRecentMessage.name);
}
