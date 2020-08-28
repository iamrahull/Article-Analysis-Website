const handleSubmit = async (event) => {
  event.preventDefault();

  console.log("Im working");

  // Getting url from [index.html]
  let url = document.getElementById("url");
  url = url.value;

  if (!url) {
    return; // If its empty return null
  }

  const response = await fetch("/article", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const jsonData = await response.json();

  document.getElementById("text").innerHTML = jsonData.text;
  document.getElementById("polarity").innerHTML = jsonData.polarity;
  document.getElementById("polarity_confidence").innerHTML =
    jsonData.polarity_confidence;
  document.getElementById("subjectivity").innerHTML = jsonData.subjectivity;
  document.getElementById("subjectivity_confidence").innerHTML =
    jsonData.subjectivity_confidence;
};

export { handleSubmit };
