interface Props {
  month: string;
  date: string;
  day: string;
  year: string;
  startTime: string;
  endTime: string;
}

function DateDisplay({ month, date, day, year, startTime, endTime }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center font-playfair text-2xl">{month}</p>
      <div className="flex justify-between items-center">
        <div className="border-y py-2 border-y-brandLight w-1/3">
          <p>{day}</p>
        </div>
        <div className="text-4xl w-1/3">{date}</div>
        <div className="border-y py-2 border-y-brandLight w-1/3">
          <p>
            {startTime} - {endTime}
          </p>
        </div>
      </div>
      <p className="text-center font-playfair text-2xl">{year}</p>
    </div>
  );
}

export default DateDisplay;
