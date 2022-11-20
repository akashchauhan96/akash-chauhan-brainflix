//Deconstruct axious url link
const mainURL = process.env.REACT_APP_SERVER_URL;
const videosEndpoint = 'videos/'
// const apiKey = '?api_key=cd79fcde-0845-4d56-ab55-a675677dca40'

export const getVideosArray = () => mainURL + videosEndpoint;
export const getVideoDetailsById = (id) => mainURL + videosEndpoint + id;