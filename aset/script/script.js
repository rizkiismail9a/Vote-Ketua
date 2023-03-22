let voteBastet = 0;
let voteMentari = 0;
let voteYuri = 0;

function vote1() {
  voteBastet++;
  const vote = document.getElementById("voteBastet");
  vote.innerHTML = `Vote: ${voteBastet}`;
}
function cancel1() {
  if (voteBastet > 0) {
    voteBastet--;
    const cancel = document.getElementById("voteBastet");
    cancel.innerHTML = `Vote: ${voteBastet}`;
  }
}

function vote2() {
  voteMentari++;
  const vote = document.getElementById("voteMentari");
  vote.innerHTML = `Vote: ${voteMentari}`;
}
function cancel2() {
  if (voteMentari > 0) {
    voteMentari--;
    const cancel = document.getElementById("voteMentari");
    cancel.innerHTML = `Vote: ${voteMentari}`;
  }
}

function vote3() {
  voteYuri++;
  const vote = document.getElementById("voteYuri");
  vote.innerHTML = `Vote: ${voteYuri}`;
}
function cancel3() {
  if (voteYuri > 0) {
    voteYuri--;
    const cancel = document.getElementById("voteYuri");
    cancel.innerHTML = `Vote: ${voteYuri}`;
  }
}
