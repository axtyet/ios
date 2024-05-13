import getStorage from '../ENV/getStorage.mjs'
import _ from '../ENV/Lodash.mjs'

/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {Array} platforms - Platform Names
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
export default function setENV(name, platforms, database) {
	console.log(`☑️ Set Environment Variables`, "");
	let { Settings, Caches, Configs } = getStorage(name, platforms, database);
	/***************** Settings *****************/
	// 单值或空值转换为数组
	if (!Array.isArray(Settings?.Home?.Top)) _.set(Settings, "Home.Top", (Settings?.Home?.Top) ? [Settings.Home.Top] : []);
	if (!Array.isArray(Settings?.Home?.Top_more)) _.set(Settings, "Home.Top_more", (Settings?.Home?.Top_more) ? [Settings.Home.Top_more] : []);
	if (!Array.isArray(Settings?.Home?.Tab)) _.set(Settings, "Home.Tab", (Settings?.Home?.Tab) ? [Settings.Home.Tab] : []);
	if (!Array.isArray(Settings?.Following?.Tab)) _.set(Settings, "Following.Tab", (Settings?.Following?.Tab) ? [Settings.Following.Tab] : []);
	if (!Array.isArray(Settings?.Bottom)) _.set(Settings, "Bottom", (Settings?.Bottom) ? [Settings.Bottom] : []);
	if (!Array.isArray(Settings?.Mine?.CreatorCenter)) _.set(Settings, "Mine.CreatorCenter", (Settings?.Mine?.CreatorCenter) ? [Settings.Mine.CreatorCenter] : []);
	if (!Array.isArray(Settings?.Mine?.Recommend)) _.set(Settings, "Mine.Recommend", (Settings?.Mine?.Recommend) ? [Settings.Mine.Recommend] : []);
	if (!Array.isArray(Settings?.Mine?.More)) _.set(Settings, "Mine.More", (Settings?.Mine?.More) ? [Settings.Mine.More] : []);
	if (!Array.isArray(Settings?.Mine?.iPad?.Upper)) _.set(Settings, "Mine.iPad.Upper", (Settings?.Mine?.iPad?.Upper) ? [Settings.Mine.iPad.Upper] : []);
	if (!Array.isArray(Settings?.Mine?.iPad?.Recommend)) _.set(Settings, "Mine.iPad.Recommend", (Settings?.Mine?.iPad?.Recommend) ? [Settings.Mine.iPad.Recommend] : []);
	if (!Array.isArray(Settings?.Mine?.iPad?.More)) _.set(Settings, "Mine.iPad.More", (Settings?.Mine?.iPad?.More) ? [Settings.Mine.iPad.More] : []);
	if (!Array.isArray(Settings?.Region?.Index)) _.set(Settings, "Region.Index", (Settings?.Region?.Index) ? [Settings.Region.Index] : []);
	console.log(`✅ Set Environment Variables, Settings: ${typeof Settings}, Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Caches *****************/
	//console.log(`✅ Set Environment Variables, Caches: ${typeof Caches}, Caches内容: ${JSON.stringify(Caches)}`, "");
	/***************** Configs *****************/
	return { Settings, Caches, Configs };
};
