import axios from "axios";
const apiKey = "AIzaSyBTTxprPNI4u3hpR-2W9JVpMae_ehutaiM";


export default {
    searchVideos: function(term) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
};