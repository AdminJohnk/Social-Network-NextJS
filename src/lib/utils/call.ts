/**
 * The `audioCall` function opens a new window for an audio call with the specified conversation ID.
 * @param {string} conversationID - The conversationID parameter is a string that represents the unique
 * identifier for a conversation. It is used to generate the URL for the audio call.
 * @returns The `audioCall` variable is being returned, which is a reference to the newly opened
 * window.
 */
export const audioCall = (conversationID: string) => {
  const width = window.screen.width / 1.5;
  const height = window.screen.height / 1.5;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const audioCall = window.open(
    `/call/${conversationID}/voice`,
    'audioCall',
    `width=${width},height=${height},top=${top},left=${left}`
  );

  return audioCall;
};

/**
 * The `videoChat` function opens a new window for a video call with the specified conversation ID.
 * @param {string} conversationID - The `conversationID` parameter is a string that represents the
 * unique identifier for the conversation or call. It is used to construct the URL for the video call.
 * @returns The `videoChat` variable is being returned, which is a reference to the newly opened
 * window.
 */
export const videoChat = (conversationID: string) => {
  const width = window.screen.width / 1.5;
  const height = window.screen.height / 1.5;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const videoChat = window.open(
    `/call/${conversationID}/video`,
    'videoCall',
    `width=${width},height=${height},top=${top},left=${left}`
  );

  return videoChat;
};
