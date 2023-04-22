interface MyObject {
	[key: string]: any;
}

export const filterObjectKeys = (
	obj: MyObject,
	filterFn: (key: string) => boolean
): MyObject => {
	const filteredObj: MyObject = {};

	Object.keys(obj)
		.filter(filterFn)
		.forEach((key) => {
			filteredObj[key] = obj[key];
		});

	return filteredObj;
};
