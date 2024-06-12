class WrappedStorage {

	// @ts-ignore
	constructor(private storageName: string, private getStorage: () => Storage) { }

	setItem = (key: string, value: string) => {
		try {
			this.getStorage().setItem(key, value);
		} catch (e) {
			return console.error(e);
		}
	};

	getItem = (key: string) => {
		try {
			return this.getStorage().getItem(key);
		} catch (e) {
			return console.error(e);
		}
	};
}

export default {
	sessionStorage: new WrappedStorage('sessionStorage', () => sessionStorage),
	localStorage: new WrappedStorage('localStorage', () => localStorage),
};