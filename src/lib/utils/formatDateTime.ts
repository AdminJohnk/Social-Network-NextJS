import { format, isToday, isThisWeek, isThisYear } from 'date-fns';

export const getDateTimeToNow = (date: string | number | Date) => {
  if (!date) {
    return '';
  }

  const today = new Date();
  const commentDate = new Date(date);
  const diff = Math.abs(today.getTime() - commentDate.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  if (diffDays === 1) {
    const diffHours = Math.ceil(diff / (1000 * 3600));
    if (diffHours === 1) {
      const diffMinutes = Math.ceil(diff / (1000 * 60));
      return `${
        diffMinutes - 1 === 0
          ? 'Just now'
          : `${diffMinutes - 1} minute${diffMinutes - 1 === 1 ? '' : 's'} ago`
      }`;
    }
    return `${diffHours - 1} hour${diffHours - 1 === 1 ? '' : 's'} ago`;
  }

  if (diffDays <= 7) {
    return `${diffDays - 1} day${diffDays - 1 === 1 ? '' : 's'} ago`;
  }

  if (diffDays <= 365) {
    return format(commentDate, 'MMM dd • h:mm a');
  }

  return format(commentDate, 'MMM dd, yyyy');
};

export const getDateTime = (date: string | number | Date) => {
  if (!date) {
    return '';
  }
  const commentDate = new Date(date);

  if (isToday(commentDate)) {
    return format(commentDate, 'h:mm a');
  }

  if (isThisWeek(commentDate, { weekStartsOn: 1 })) {
    return format(commentDate, 'EEEE • h:mm a');
  }

  if (isThisYear(commentDate)) {
    return format(commentDate, 'MMM dd • h:mm a');
  }

  return format(commentDate, 'MMM dd, yyyy • h:mm a');
};

export const getLastOnline = (date: string | number | Date) => {
  if (!date) {
    return '';
  }

  const today = new Date();
  const commentDate = new Date(date);
  const diff = Math.abs(today.getTime() - commentDate.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  if (diffDays === 1) {
    const diffHours = Math.ceil(diff / (1000 * 3600));
    const diffMinutes = Math.ceil(diff / (1000 * 60));
    if (diffHours === 1 || diffMinutes < 60) {
      return `Online ${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;
    }
    return `Online ${diffHours - 1} hour${diffHours - 1 === 1 ? '' : 's'} ago`;
  }

  if (diffDays <= 7) {
    return `Online ${diffDays - 1} day${diffDays - 1 === 1 ? '' : 's'} ago`;
  }

  if (diffDays <= 365) {
    return 'Last seen at ' + format(commentDate, 'MMM dd • h:mm a');
  }

  return 'Last seen at ' + format(commentDate, 'MMM dd, yyyy');
};

export const getDateMonth = (date: string | number | Date) => {
  if (!date) {
    return '';
  }
  const commentDate = new Date(date);

  if (isToday(commentDate)) {
    return format(commentDate, 'h:mm a');
  }

  if (isThisWeek(commentDate, { weekStartsOn: 1 })) {
    return format(commentDate, 'EEEE');
  }

  if (isThisYear(commentDate)) {
    return format(commentDate, 'MMM dd');
  }

  return format(commentDate, 'MMM dd, yyyy');
};
