const fs = require("fs");
const superagent = require("superagent");
const { reject } = require("superagent/lib/request-base");

//reading and writing files using promises
/* fs.readFile(`${__dirname}/breed.txt`, (err, data) => {
  if (err) return console.log(err);
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile("writtenbreeds.txt", res.body.message, (err) => {
        if (err) return console.log(err);
        console.log("File written successfully");
      });
    })
    .catch((err) => {
      if (err) return console.log(err);
    });
}); */

////////////////////////////////
// Own function that returns promises instead of parsing call back functions

const readFilePro = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(console.log(err));
      resolve(data);
    });
  });
};

const writeFilePro = (filename, data) => {
  fs.writeFile(filename, data, (err) => {
    return new Promise((resolve, reject) => {
      if (err) return reject(console.log(err));
      resolve("File written successfully");
    });
  });
};

/* readFilePro(`${__dirname}/breed.txt`)
  .then((result) => {
    console.log(`Dog breed is: ${result}`);

    return superagent.get(`https://dog.ceo/api/breed/${result}/images/random`);
  })
  .then((result) => {
    console.log(result.body.message);

    return writeFilePro("breedsPro.txt", result.body.message);
  })
  .then(() => {
    console.log("Random dog written!");
  })
  .catch((err) => {
    console.log(err);
  });
 */

// ASYNC AWAIT

const getDogBreed = async () => {
  try {
    const data = await readFilePro(`${__dirname}/breed.txt`);
    console.log(`Dog breed is: ${data}`);

    const breedPic = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const breedPic2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const breedPic3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const pictures = await Promise.all([breedPic, breedPic2, breedPic3]);
    const pics = pictures.map((el) => el.body.message);
    console.log(pics);

    await writeFilePro("awaitBreedPro.txt", pics.join("\n"));
    console.log("Dog breed written successfully!!!");
  } catch (err) {
    console.log(err);
    throw err;
  }

  return console.log("2: Done getting dogs!!!");
};

// iffy async function to handle errors from getDogBreed function with await to stop code and exeucute function first
(async () => {
  try {
    console.log("1: lets see");
    await getDogBreed();
    console.log("3: this is fun");
  } catch (err) {
    console.log("ERROR");
  }
})();
