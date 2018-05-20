import { LanguageEX } from 'didgah/global';


class Cache {
	static languageCache: { key: string; value: string }[] = [];

	static find(key: string, softwareGuid: string) {
		const cachedItem = Cache.languageCache.filter(x => x.key === key)[0];
		if (!!cachedItem) {
			return cachedItem.value;
		}

		const translatedValue = LanguageEX.GetString(key, softwareGuid);
		Cache.languageCache.push({
			key,
			value: translatedValue
		});
		return translatedValue;
	}
}

export function getString(key: string, softwareGuid: string) {
	return Cache.find(key, softwareGuid);
}