import { saveDataJson } from "../utils/saveDataJson.js";
import { $t, languageData } from "./translations.js";
import { state } from "./main.js";
import cdn from "../public/api/cdn_images.json" assert { type: "json" };

const isKey = (item) => {
    if (item.item_name === undefined) {
        return false;
    }

    if (item.item_name.includes("contestwinner")) {
        return false;
    }

    if (item.item_name.includes("storepromo_key")) {
        return false;
    }

    // if (!item.item_name.startsWith("#CSGO_crate")) {
    //     return false;
    // }

    // if (item.item_name.includes("contestwinner")) {
    //     return false;
    // }

    if (!item?.prefab?.includes("weapon_case_key")) {
        return false;
    }

    return true;
};

const parseItem = (item) => {
    const { items } = state;

    const image = cdn[item.image_inventory.toLowerCase()];
    const crates = Object.values(items)
        .filter(
            (crate) =>
                ["sticker_capsule", "weapon_case"].includes(crate.prefab) &&
                crate?.tool?.restriction === item.tool?.restriction
        )
        .map((crate) => ({
            id: `crate-${crate.object_id}`,
            name: $t(crate.item_name),
            image: cdn[crate.image_inventory.toLowerCase()],
        }));

    return {
        id: `key-${item.object_id}`,
        name: $t(item.item_name),
        description:
            $t(item.item_description) ?? $t(item.item_description_prefab),
        crates,
        image,
    };
};

export const getKeys = () => {
    const { items } = state;
    const { folder } = languageData;

    const keys = Object.values(items).filter(isKey).map(parseItem);

    saveDataJson(`./public/api/${folder}/keys.json`, keys);
};
