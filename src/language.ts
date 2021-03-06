class Cache {
	static languageCache: { key: string; value: string }[] = [];

	static find(key: string, softwareGuid: string) {
		const refinedKey = `${key}-${softwareGuid}`;
		const cachedItem = Cache.languageCache.filter(x => x.key === refinedKey)[0];
		if (!!cachedItem) {
			return cachedItem.value;
		}

		const translatedValue = window['LanguageEX'].GetString(key, softwareGuid);
		Cache.languageCache.push({
			key:refinedKey,
			value: translatedValue
		});
		return translatedValue;
	}
}

export function getString(key: string, softwareGuid: string) {
	return Cache.find(key, softwareGuid);
}