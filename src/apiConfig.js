let apiUrl
const apiUrls = {
	production: 'https://gg-chat-api.herokuapp.com',
	development: 'http://localhost:3040',
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
