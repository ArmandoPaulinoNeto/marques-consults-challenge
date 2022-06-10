const axios = require('axios');
const connection = require('../database/connection');

var artistsUrl = 'https://api.artic.edu/api/v1/artists/';
var agentsUrl = 'https://api.artic.edu/api/v1/agents/';

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

    response = { seccess: false, data : {}, error: [] };

    try {
            axios.get(url).then((resp)=>{
                
            if(resp.data['pagination'] !== undefined){
                
                var datas = new Array();

                var pagination = {
                    total: resp.data['pagination'].total,
                    current_page: resp.data['pagination'].current_page,
                    next_url: resp.data['pagination'].next_url
                }
                
                resp.data['data'].forEach(it => {
                    datas.push({id: it.id, api_link: it.api_link, title: it.title});
                });

                var fields = JSON.parse(JSON.stringify(datas));
                response.data = {pagination, fields};
            }else{
                
                response.data = {id: resp.data['data'].id, api_link: resp.data['data'].api_link, title: resp.data['data'].title};
            }

            response.seccess = true;
            saveConsulAPI(url);
            return res.json(response);
        }).catch(error => {
            response.error = error.message;
            return res.json(response);
        });
    } catch (error) {
        response.error = error.message;
        return res.json(require);
    }
}

function saveConsulAPI(url) {
    try {
        connection.query(`INSERT INTO registers VALUES (DEFAULT, '${url}', NOW())`);
    } catch (error) {
        console.log(`Erro ao tentar inserir no banco!\n\n${error.message}`);
    }
            
}