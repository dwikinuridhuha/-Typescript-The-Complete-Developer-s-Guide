import fs from "fs";
import {resolveTxt} from "dns";

const matches = fs.readFileSync("football.csv", {encoding: "utf-8"})
    .split("/n")
    .map((row): string[] => {
        return row.split(",");
    });

enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}

let manUnitedWins = 0

for (let match of matches) {
    if (match[1] === "Man United" && match[5] == "H") {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] == "A") {
        manUnitedWins++;
    }
}

console.log(manUnitedWins);