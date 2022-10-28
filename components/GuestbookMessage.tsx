interface Props {
  from: string;
  message: string;
  date: Date;
}

function GuestbookMessage({ from, message, date }: Props) {
  return (
    <div className="shadow-md rounded-lg bg-base-100 p-2 w-full">
      <span className="font-bold text-brandLight capitalize">
        {from || 'awanama'}
      </span>
      <p className="text-right py-2">{message}</p>
      <p className="text-right font-mono py-2">{date.toDateString()}</p>
    </div>
  );
}

export default GuestbookMessage;
