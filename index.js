import express from 'express';
import axios from 'axios';
import qs from 'qs';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();



app.get('/', (req, res) => {


    const lang = req.query.language;
    const code = req.query.code;
    var data = qs.stringify({
        'code': code,
        'language': lang,
        'input': ''
    });
    var config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            if (response.data.output == "") {
                res.send({
                    output: "\nPlease Input Valid language\n",
                    language: lang
                })
            } else {
                res.send({
                    output: "\n" + response.data.output,
                    language: lang,
                    status: response.data.status
                });
            }
        })
        .catch(function(error) {
            console.log(error);
            const err = {
                output: error.response.data.error,
                language: lang,
                status: error.response.data.status
            };
            res.send(err);
        });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Your App is ACTIVE!🎊 at http://localhost:' + PORT));