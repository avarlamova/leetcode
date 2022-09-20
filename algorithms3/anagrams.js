let answer = "NO";
if (
  words[0]
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("") ===
  words[1]
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
) {
  answer = "YES";
}
return answer;
