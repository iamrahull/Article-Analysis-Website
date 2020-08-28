// For evaluating text
const Aylien = require("aylien_textapi");
const dotenv = require("dotenv");

dotenv.config();

const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;

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
