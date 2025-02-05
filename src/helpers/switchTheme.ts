export const switchTheme = (theme: 'light' | 'dark') => {
	document.documentElement.classList.remove('light-theme', 'dark-theme')
	// document.documentElement.classList.add(`${theme}-theme`)
	document.documentElement.classList.add(`light-theme`)
	localStorage.setItem('theme', theme)
}
