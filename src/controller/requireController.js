const axios = require('axios');

const responseModel = {
    seccess: false,
    data : 'valor default',
    error: []
}

var artists_url = 'https://api.artic.edu/api/v1/artists/';
var agents_url = "https://api.artic.edu/api/v1/agents/";

module.exports = {
    
    async all(req, res){
        
        returnConsult(artists_url, res);        
    },
    async search(req, res){
        
        artists_url += `search?q=${req.params.words}`;
        returnConsult(artists_url, res);
    },
    async agents(req, res){

        returnConsult(agents_url, res);
    },
    async findAgent(req, res){
        
        agents_url += `${req.params.id}`;
        returnConsult(agents_url, res);
    }
}

function returnConsult(url, res) {

    const require = { ...responseModel };

    (async () => {
        try {
            const [resp] = await axios.all([
                axios.get(url)
            ]);

            require.data = resp['data'];
            require.seccess = true;
            return res.json(require);
        } catch (error) {
            require.data = error.response.body;
            return res.json(require);
        }
    })();
}
