const problems1 = [
    {
      title: "1. Two Sum",
      difficulty: "Easy",
      acceptance: "55.7%",
    },
    {
      title: "2. Add Two Numbers",
      difficulty: "Medium",
      acceptance: "46.1%",
    },
    {
      title: "4. Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "43.6%",
    },
  ];
  const problems2 = [
    {
      title: "15. 3Sum",
      difficulty: "Medium",
      acceptance: "36.9%",
    },
    {
      title: "18. 4Sum",
      difficulty: "Medium",
      acceptance: "38.1%",
    },
    {
      title: "26. Remove Duplicates from Sorted Array",
      difficulty: "Easy",
      acceptance: "60.2%",
    },
  ];

  function renderProblems1() {
    const parentEl = document.getElementById("problems-statements");
    parentEl.innerHTML = "";
    renderProblems(problems1);
  }

  function renderProblems2() {
    const parentEl = document.getElementById("problems-statements");
    parentEl.innerHTML = "";
    renderProblems(problems2);
  }

  function renderProblems(problemsProvided) {
    const parentEl = document.getElementById("problems-statements");
    const tableTag = document.createElement("table");
    for (let i = 0; i < problemsProvided.length; i++) {
      const trTag = document.createElement("tr");
      const tdEl1 = document.createElement("td");
      tdEl1.innerHTML = problemsProvided[i].title;
      const tdEl2 = document.createElement("td");
      tdEl2.innerHTML = problemsProvided[i].difficulty;
      const tdEl3 = document.createElement("td");
      tdEl3.innerHTML = problemsProvided[i].acceptance;

      trTag.appendChild(tdEl1);
      trTag.appendChild(tdEl2);
      trTag.appendChild(tdEl3);
      tableTag.appendChild(trTag);
    }

    parentEl.appendChild(tableTag);
  }