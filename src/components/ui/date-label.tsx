// /* eslint-disable no-nested-ternary */
// import { CalendarIcon } from '@/assets/icons';
// import { cn } from '@/lib/utils';
// import { format } from 'date-fns';

import { CalendarIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
// import CalendarIcon from '../../../assets/icons/CalendarIcon';
// import { cn } from '../../../utils/common';

type Props = {
  date: string;
  className?: string;
  labelClassNames?: string;
  longText?: boolean;
  iconSize?: number;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const pad = (number: number) => (number < 10 ? `0${number}` : number);

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1); // getMonth() trả về giá trị từ 0-11
  const year = date.getFullYear();

  return `Đăng lúc ${hours}:${minutes} ngày ${day}/${month}/${year}`;
}

function DateLabel(props: Props) {
  const {
    date,
    labelClassNames = 'text-xs',
    className,
    longText,
    iconSize,
  } = props;

  return (
    <div className={`flex items-center gap-x-1 ${className}`}>
      <CalendarIcon size={iconSize} />

      <p
        className={cn(`text-slate-600 ${labelClassNames}`, {
          'text-base': longText,
        })}
      >
        {date
          ? longText
            ? formatDate(date)
            : dayjs(date).format('hh:MM dd/MM/yyyy')
          : '--'}
        {}
      </p>
    </div>
  );
}

export default DateLabel;
