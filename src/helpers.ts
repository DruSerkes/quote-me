export const copyText = (val: string) => {
  if (navigator?.clipboard?.writeText) return navigator.clipboard.writeText(val);

  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', val);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

