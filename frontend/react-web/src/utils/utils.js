export default function getBaseUrl() {
    return `${import.meta.env.VITE_ENDPOINT_SERVER}${import.meta.env.VITE_ENDPOINT_PREFIX_API}`;
}