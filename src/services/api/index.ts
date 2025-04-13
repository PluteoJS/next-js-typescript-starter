import type {StoreType} from "@store/index";

import {injectStore as JSONNubesInjectStore} from "@services/api/JSONNubes";

/**
 * Injects redux-store to the local variable reduxStore which gets used
 * inside the axios interceptors.
 *
 * For more details, please refer:
 * https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
 *
 * @param store
 */

export const injectStore = (store: StoreType): void => {
	JSONNubesInjectStore(store);
};
