import { FormEvent } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  fromInput: HTMLInputElement;
  messageInput: HTMLTextAreaElement;
}

interface GuestBookFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  onSubmit: (from: string, message: string) => void;
  isLoading: boolean;
}

function GuestbookForm({ onSubmit, isLoading = false }: Props) {
  const handleSubmit = (event: FormEvent<GuestBookFormElements>) => {
    event.preventDefault();
    const { fromInput, messageInput } = event.currentTarget.elements;
    onSubmit(fromInput.value, messageInput.value);
  };

  return (
    <form className="my-6 flex flex-col gap-2 max-w-xs" onSubmit={handleSubmit}>
      <div className="form-control w-full">
        <label className="label" htmlFor="fromInput">
          <span className=" font-playfair label-text text-brandLight ">
            Pengirim
          </span>
        </label>
        <input
          type="text"
          name="fromInput"
          placeholder="Nama pengirim"
          className=" font-playfair input input-bordered w-full text-brandLight"
          required
        />
      </div>
      <div className="form-control w-full">
        <label className="label" htmlFor="messageInput">
          <span className="font-playfair label-text text-brandLight">
            Pesan
          </span>
        </label>
        <textarea
          name="messageInput"
          placeholder="Pesan kepada pengantin"
          className="font-playfair textarea textarea-bordered w-full text-brandLight"
          required
        />
      </div>
      <div className="form-control w-full">
        <button
          className="btn font-playfair"
          type="submit"
          disabled={isLoading}
        >
          Kirim
        </button>
      </div>
    </form>
  );
}

export default GuestbookForm;
