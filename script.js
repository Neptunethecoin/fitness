document.getElementById("fitnessForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const level = formData.get("level");
  const goal = formData.get("goal");
  const days = formData.get("days");

  let plan = "";

  if (goal === "Build Muscle") {
    plan = `🏋️‍♂️ ${days}x/week strength training with progressive overload`;
  } else if (goal === "Lose Fat") {
    plan = `🔥 ${days}x/week fat-burning HIIT + cardio with moderate resistance`;
  } else if (goal === "Tone") {
    plan = `🧘‍♀️ ${days}x/week bodyweight & circuit training for lean tone`;
  } else {
    plan = `🚶‍♂️ ${days}x/week balanced general fitness with flexibility & strength`;
  }

  localStorage.setItem("plan", plan);
  localStorage.setItem("name", name);
  window.location.href = "plan.html";
});