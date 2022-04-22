const fs = require("fs").promises;
const { readFile, readdir } = fs;

//TODO extract results (wining number per car - win ratio, tie times and cars involved)

readdir(".")
  .then((files) => {
    const txtFiles = files.filter((file) => file.endsWith(".txt"));

    const reads = txtFiles.map((txt) => readFile(txt, "utf8"));

    return Promise.all(reads);
  })
  .then((races) =>

    races.reduce(
      //reduce(accum(en este caso un objeto, partimos de las estadisitcas=0), nextValue)
      (stats, race) => {
        const lines = race.split("\n");

        stats["🚗"].avg += lines[0].length / races.length;
        stats["🏎️"].avg += lines[1].length / races.length;
        stats["🚓"].avg += lines[2].length / races.length;

        const last = lines[lines.length - 1];

        if (last.includes("🚗")) stats["🚗"].wins++;
        if (last.includes("🏎️")) stats["🏎️"].wins++;
        if (last.includes("🚓")) stats["🚓"].wins++;

        stats["🚗"].winRatio = Math.round(stats["🚗"].wins / races.length * 100 ) + '%';
        stats["🏎️"].winRatio = Math.round(stats["🏎️"].wins / races.length * 100 ) + '%';
        stats["🚓"].winRatio = Math.round(stats["🚓"].wins / races.length * 100 ) + '%';

        return stats;
      },
      {
        "🚗": { wins: 0, winRatio: 0, avg: 0, totalRaces: races.length},
        "🏎️": { wins: 0, winRatio: 0, avg: 0, totalRaces: races.length},
        "🚓": { wins: 0, winRatio: 0, avg: 0, totalRaces: races.length},
      }
    )
  )
  .then((stats) => console.log(stats))
  .catch(console.error);
