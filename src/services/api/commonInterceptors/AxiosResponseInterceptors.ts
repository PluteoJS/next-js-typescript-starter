import {AxiosInstance} from "axios";

/**
 * NOTE: Currently we're not using redux in this project.
 * The type of this will be changed to the proper
 * redux store type once we start using redux.
 */
// import type {StoreType} from "@store/index";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StoreType = any;

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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(responseInterceptor: any) => {
			apiServer.interceptors.response.use(
				responseInterceptor.onFulfilled,
				responseInterceptor.onRejected,
			);
		},
	);
}

export default AxiosResponseInterceptors;
