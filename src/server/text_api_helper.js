// For evaluating text
const Aylien = require("aylien_textapi");
const dotenv = require("dotenv");

dotenv.config();

const API_ID = '66d8dfdd';
const API_KEY = 'bd4375a2f7c9e97e93f772922bab7084';

const textApi = new Aylien({
  application_id: API_ID,
  application_key: API_KEY,
});

const extractDataFromAylien = (req, res) => {
  const { url } = req.body;
  textApi.sentiment(
    {
      url,
    },
    (error, response) => {
      if (!error) res.send(response);
    }
  );
};

exports.extractData = extractDataFromAylien;
