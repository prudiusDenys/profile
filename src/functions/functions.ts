export const nameCut = (personName: string) => {
	const cutName = personName.split(' ').filter((elem, i) => i < 2).map((elem, i) => {
		if (i === 1) {
			return elem[0]
		}
		return elem
	});
	if (cutName.length > 1) {
		return cutName.join(' ') + '.'
	} else {
		return cutName.join(' ')
	}
}