import { FormEvent, useEffect } from 'react';
import useGuestbook from '../hooks/useGuestbook';
import GuestbookForm from './GuestbookForm';
import GuestbookMessageList from './GuestbookMessageList';

/* eslint-disable @next/next/no-img-element */
function GuestbookSection() {
  const [state, actions] = useGuestbook();

  useEffect(() => {
    actions.handleGetMessage();
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-around items-center min-h-screen relative my-12 mt-32">
      <div>
        <h2 className="text-center text-brandLight text-6xl font-brittany my-12">
          Buku Tamu
        </h2>
        <div className="min-h-64 max-h-64 overflow-scroll">
          <div className="flex flex-col gap-4">
            <GuestbookMessageList
              isLoading={state.isLoading}
              messages={state.messages}
              error={state.error}
            />
          </div>
        </div>
      </div>
        <div className="card w-full max-w-xs bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-playfair text-brandLight">Sampaikan pesan kepada pengantin</h2>
            <GuestbookForm
              onSubmit={actions.handleSendMessage}
              isLoading={state.isLoading}
            />
          </div>
        </div>

      <div className="absolute -left-32 -top-48 ">
        <div className="w-64 h-64 bg-flower bg-no-repeat bg-center bg-contain scale-100 rotate-0" />
      </div>
      <div className="absolute -bottom-48 -right-24">
        <div className="w-52 h-52 bg-flower bg-no-repeat bg-center bg-contain -rotate-0" />
      </div>
    </div>
  );
}

export default GuestbookSection;
