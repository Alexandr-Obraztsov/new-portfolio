export enum WidgetType {
	ABOUT = 'about',
	SKILLS = 'skills',
	PROJECTS = 'projects',
	CONTACT = 'contact',
	TRASH = 'trash',
	MUSIC = 'music',
	GAME = 'game',
}

export type Widget = {
	id: string
	type: WidgetType
	isActive: boolean
}
