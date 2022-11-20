//Deconstruct axious url link
// const mainURL = 'https://project-2-api.herokuapp.com/'
const videosEndpoint = 'videos/'
// const apiKey = '?api_key=cd79fcde-0845-4d56-ab55-a675677dca40'

export const getVideosArray = () => videosEndpoint;
export const getVideoDetailsById = (id) => videosEndpoint + id;