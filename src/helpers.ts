export const copyText = (val: string) => {
	const dummy = document.createElement('input');
	document.body.appendChild(dummy);
	dummy.setAttribute('value', val);
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
};
