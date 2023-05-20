export default function getBaseUrl() {
    return `${import.meta.env.VITE_ENDPOINT_SERVER}${import.meta.env.VITE_ENDPOINT_PREFIX_API}`;
}

export  function getURLTracks() {
    return `${getBaseUrl()}/tracks`;
}
export  function getURLMusic() {
    return `${import.meta.env.VITE_ENDPOINT_SERVER}/music`;
}

export  function getURLAlbum() {
    return `${import.meta.env.VITE_ENDPOINT_SERVER}/album`;
}