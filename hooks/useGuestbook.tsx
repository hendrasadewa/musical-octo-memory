import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { getMessages, Message, sendMessage } from '../model/messageModel';

interface HookActions {
  handleGetMessage: () => Promise<void>;
  handleSendMessage: (from: string, message: string) => Promise<void>;
}

interface HookStates {
  isLoading: boolean;
  messages: Message[];
  error: Error | undefined;
}

type ReturnType = [HookStates, HookActions];

function useGuestbook(): ReturnType {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  const handleGetMessage = async () => {
    try {
      setLoading(true);
      const response = await getMessages();
      if (response.error) {
        throw new Error(response.error.message);
      }
      if (response.data) {
        setMessages(response.data);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('Unhandled error'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (from: string, message: string) => {
    try {
      setLoading(true);
      const response = await sendMessage({ from, message });
      if (response.error) {
        throw new Error(response.error.message);
      }
      handleGetMessage();
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('Unhandled error'));
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return [
    { isLoading, error, messages },
    { handleGetMessage, handleSendMessage },
  ];
}

export default useGuestbook;
