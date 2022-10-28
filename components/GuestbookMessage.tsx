interface Props {
  from: string;
  message: string;
  date: Date;
}

function GuestbookMessage({ from, message, date: dateString }: Props) {
  const date = new Date(dateString);
  return (
    <div className="shadow-md rounded-lg bg-base-100 p-2 w-full max-w-xs">
      <div className="flex justify-between items-center">
        <span className="font-bold text-brandLight capitalize font-playfair">
          {from || 'awanama'}
        </span>
        <p className="text-right font-mono py-2">
          {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
        </p>
      </div>
      <p className="text-right py-2 font-playfair">{message}</p>
    </div>
  );
}

export default GuestbookMessage;
