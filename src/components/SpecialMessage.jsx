const MESSAGES = {
  error: "Countries aren't here for some reason...",
};

export function SpecialMessage({ message }) {
  return <div className={message}>{MESSAGES[message]}</div>;
}
