import supabase from '../utils/supabase';

export interface Message {
  id: string;
  created_at: Date;
  message: string;
  from: string;
}

export interface MessagePayload {
  message: string;
  from: string;
}

export function getMessages() {
  return supabase.from('messages');
}

export function sendMessage(payload: MessagePayload) {
  return supabase.from('message').upsert(payload);
}
