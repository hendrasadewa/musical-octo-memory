import { useEffect, useState } from 'react';

interface Message {
  id: string;
  from: string;
  message: string;
  date: Date;
}

function GuestbookMessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string|undefined>();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        setMessages([]);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  return (
    <div className="min-h-64 max-h-64 overflow-scroll">
      <div className="flex flex-col gap-4">
        
      </div>
    </div>
  );
}

export default GuestbookMessageList;
