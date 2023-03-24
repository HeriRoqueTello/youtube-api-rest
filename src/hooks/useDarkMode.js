import { useEffect, useState } from 'react';

export default function useDarkMode() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const darkClass = 'dark';
		const html = document.querySelector('html');

		if (localStorage.getItem('theme') === 'dark') {
			html.classList.add(darkClass);
			setDarkMode(true);
		} else {
			html.classList.remove(darkClass);
			setDarkMode(false);
		}
	}, []);

	const toggleDarkMode = () => {
		const html = document.querySelector('html');

		if (!darkMode) {
			html.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setDarkMode(true);
		} else {
			html.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setDarkMode(false);
		}
	};

	return [darkMode, toggleDarkMode];
}
