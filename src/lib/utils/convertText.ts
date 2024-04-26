export const textToHTML = (text: string, tabSize = 4) => {
  const tab = ' '.repeat(tabSize);

  return (
    text
      .replace(/\r\n/g, '<br>')
      .replace(/\r/g, '<br>')
      .replace(/\n/g, '<br>')
      .replace(/\t/g, tab)
      // .replace(/ /g, '&nbsp;')
      .replace(/-/g, '&#8209;')
  );
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const handleFirstName = (name: string) => {
  const arr = name.split(' ');
  return arr[arr.length - 1];
};
