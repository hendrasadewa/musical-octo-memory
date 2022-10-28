import { Message } from '../model/messageModel';
import GuestbookMessage from './GuestbookMessage';

interface Props {
  isLoading: boolean;
  messages: Message[];
  error?: Error;
}

function GuestbookMessageList({ isLoading, messages, error }: Props) {
  return (
    <div className="min-h-64 max-h-64 overflow-scroll">
      <div className="flex flex-col gap-4">
        {messages.map(({ created_at, from, id, message }) => (
          <GuestbookMessage
            key={id}
            date={created_at}
            from={from}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}

export default GuestbookMessageList;
