const axios = require('axios');

const responseModel = {
    seccess: false,
        data : {},
    error: []
}

var artistsUrl = 'https://api.artic.edu/api/v1/artists/';
var agentsUrl = "https://api.artic.edu/api/v1/agents/";

module.exports = {
    
    async artists(req, res){
        
        returnConsult(artistsUrl, res);        
    },
    async artistsSearch(req, res){
        
        var url = `${artistsUrl}search?q=${req.params.words}`;
        returnConsult(url, res);
    },
    async findArtists(req, res){
        
        var url = `${artistsUrl}${req.params.id}`;
        returnConsult(url, res);
    },
    async agents(req, res){

        returnConsult(agentsUrl, res);
    },
    async findAgents(req, res){
        
        var url = `${agentsUrl}${req.params.id}`;
        console.log(url);
        returnConsult(url, res);
    }
}

function returnConsult(url, res) {

    const require = { ...responseModel };

    (async () => {
        try {
            const [resp] = await axios.all([
                axios.get(url)
            ]);
           
            if(resp.data['pagination'] !== undefined){

                var pagination = {
                    total: resp.data['pagination'].total,
                    current_page: resp.data['pagination'].current_page,
                    next_url: resp.data['pagination'].next_url
                }
                var datas = new Array();
                resp.data['data'].forEach(it => {
                    datas.push({id: it.id, api_link: it.api_link, title: it.title});
                });
                var fields = JSON.parse(JSON.stringify(datas));
                require.data = {pagination, fields};
            }else{
                
                require.data = {id: resp.data['data'].id, api_link: resp.data['data'].api_link, title: resp.data['data'].title};
            }

            require.seccess = true;
            return res.json(require);
        } catch (error) {
            require.error = error.message;
            return res.json(require);
        }
    })();
}

