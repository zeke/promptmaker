const data = require("./data.json");
const { random, sampleSize: sample } = require("lodash");

const subjects = ["cats", "birds", "fish", "ocean waves", "trees", "poppies"];

const promptmaker = (opts = {}) => {
  const medium = "medium" in opts ? opts.medium : sample(data.mediums);
  const subject = "subject" in opts ? opts.subject : sample(subjects);
  const movement = "movement" in opts ? opts.movement : sample(data.movements);
  const artist = "artist" in opts ? opts.artist : sample(data.artists);
  const flavors =
    "flavors" in opts ? opts.flavors : sample(data.flavors, random(1, 10));
  let prompt = `${medium} of ${subject} ${movement} by ${artist}`;
  if (flavors) prompt += `, ${flavors.join(", ")}`;
  return prompt;
};

promptmaker.mediums = data.mediums;
promptmaker.subjects = subjects;
promptmaker.artists = data.artists;
promptmaker.movements = data.movements;
promptmaker.flavors = data.flavors;

module.exports = promptmaker;
