import {AxiosInstance} from "axios";

import type {StoreType} from "@store/index";

/**
 * Mapping all the responseInterceptors defined as closures inside this function
 * to the axios-instance apiServer.
 *
 * Defined responseInterceptor closures needs to be registered to the constant object
 * axiosResponseInterceptors in order to get mapped.
 *
 * @param store
 * @param apiServer
 */
function AxiosResponseInterceptors(
	store: StoreType | null,
	apiServer: AxiosInstance,
): void {
	// TODO: add responseNetworkFailureInterceptor

	/**
	 * All response-interceptors should be registered here.
	 *
	 * eg: {
	 *     responseAuthorizationTokenExpireInterceptor: responseAuthorizationTokenExpireInterceptor
	 * }
	 */
	const axiosResponseInterceptors = {};

	/**
	 * Extracting and mapping each responseInterceptor defined inside
	 * AxiosInterceptors.responseInterceptors with the axios-instance
	 * apiServer.
	 */
	Object.values(axiosResponseInterceptors).forEach(
		(responseInterceptor: any) => {
			apiServer.interceptors.response.use(
				responseInterceptor.onFulfilled,
				responseInterceptor.onRejected,
			);
		},
	);
}

export default AxiosResponseInterceptors;
