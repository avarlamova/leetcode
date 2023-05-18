/**
 * Подобно оператору new создает экземпляр объекта,
 * используя функцию-конструктор и параметры для нее
 */
function constructFrom(fnConstructor, params) {
  const res = {};
  const { participants, sports } = params;

  fnConstructor.bind(res).call(fnConstructor, participants, sports);

  Object.setPrototypeOf(res, fnConstructor);

  return res;
}

/**
 * Создает пары вида ["вид спорта", "имя участника"],
 * где первому виду спорта соответствует последний участник
 */
function assignParicipants() {
  const participants = this.participants;
  const sports = this.sports;
  const orderIndexes = [];
  let i = sports.length;
  let j = 0;
  while (i--) {
    orderIndexes.push([sports[j], participants[i]]);
    j++;
  }

  return orderIndexes;
}

function Contest(participants, sports) {
  this.participants = participants;
  this.sports = sports;
}

Contest.prototype.assignParicipants = assignParicipants;

const contest = constructFrom(Contest, participants, sports);

const res = contest.assignParicipants();
console.log(res);
