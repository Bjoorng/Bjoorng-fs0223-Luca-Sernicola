const apiKey = "t6giLp8hNNR3ojsXriG3Rq7GAsantgXIrZkA7DLPFDO1RKSBGkFnuF3F";
fetch("https://api.pexels.com/v1/search?query=animals", {
  headers: {
    Authorization: apiKey,
  },
})
  .then((res) => {
    if (res.ok) return res.json();
  })
  .then((data) => {
    console.log(data);
  });
