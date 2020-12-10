module.exports = {
    services: [
        {
            name: "Common API",
            key: "nigel_david_api",
            host: "",
            type: "Server",
            location: "OVH Cloud VPS"
        },
        {
            name: "My Portfolio",
            key: "nigel_david_portfolio",
            host: "https://nigeldavid.in",
            type: "Client",
            location: "Firebase"
        },
        {
            name: "My Spotify Backend",
            key: "my_spotify_backend",
            host: "",
            type: "Server",
            location: "Heroku"
        },
        {
            name: "My Spotify Frontend",
            key: "my_spotify_frontend",
            host: "https://my-spotify-profile.web.app",
            type: "Client",
            location: "Firebase"
        },
        {
            name: "Chatroom Client",
            key: "chatroom_client",
            host: "https://peer-vue.web.app",
            type: "Client",
            location: "Firebase"
        },
        {
            name: "Chatroom Signalling Server",
            key: "signalling_server",
            host: "",
            type: "Server",
            location: "OVH Cloud VPS"
        },
        {
            name: "Chatroom Peer Server",
            key: "peer_server",
            host: "",
            type: "Server",
            location: "OVH Cloud VPS"
        },
        {
            name: "Dummy Site",
            key: "dummy",
            host: "https://daDad.nigeldavid.in",
            type: "Dummy",
            location: "Doesn't Exist"
        }
    ],
    api_url : "https://status.nigeldavid.in/check-status"
}