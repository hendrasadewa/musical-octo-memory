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
  return supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });
}

export function sendMessage(payload: MessagePayload) {
  return supabase.from('guestbook').insert(payload);
}
