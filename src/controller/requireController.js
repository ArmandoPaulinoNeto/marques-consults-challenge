const axios = require('axios');

const responseModel = {
    seccess: false,
    data : 'valor default',
    error: []
}

module.exports = {

    async all(req, res){
        
        const require = {...responseModel};

        (async () => {
        try {
            const [resp] = await axios.all([
                axios.get('https://api.artic.edu/api/v1/artists/')
            ]);
            require.seccess = true;
            require.data = resp['data'];
            return res.json(require);
        } catch (error) {            
            require.data = error.response.body;
            return res.json(require);
        }
        })();        
    },
    async search(req, res){
        
        const require = {...responseModel};

        (async () => {
        try {
                var words = req.params.words;
                console.log(words);
                const [resp] = await axios.all([
                    axios.get(`https://api.artic.edu/api/v1/artists/search?${words}`)
                ]);
                require.seccess = true;
                require.data = resp['data'];
                return res.json(require);
        } catch (error) {            
            require.data = error.response.body;
            return res.json(require);
        }
        })();
    }
}