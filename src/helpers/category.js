import * as types from '../enums/category';

export function getCategories() {
	return [
		{
			name: 'Projects',
			type: types.PROJECTS,
			cls: 'note-category-orange'
		},
		{
			name: 'Business',
			type: types.BUSINESS,
			cls: 'note-category-blue'
		},
		{
			name: 'Personal',
			type: types.PERSONAL,
			cls: 'note-category-gray'
		},
	];
}

export function getCategoryCls(categoryType) {
	const category = getCategories().find((category) => category.type === categoryType);
	if (category) {
		return category.cls;
	}

	return null;
}