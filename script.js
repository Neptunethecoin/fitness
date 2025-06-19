document.getElementById("fitnessForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const level = formData.get("level").toLowerCase();
  const age = parseInt(formData.get("age"));
  const gender = formData.get("gender").toLowerCase();

  let plan = [];

  // Age modifier
  let ageModifier = "";
  if (age < 20) {
    ageModifier = "youth";
  } else if (age <= 40) {
    ageModifier = "adult";
  } else if (age <= 60) {
    ageModifier = "mature";
  } else {
    ageModifier = "senior";
  }

  // Fitness plan logic
  if (level === "beginner") {
    plan.push("💪 3-day full-body split");
    plan.push("🚶 20–30 min low-intensity cardio after workouts");
    if (gender === "female") {
      plan.push("🧘 Add yoga or Pilates 1x/week for flexibility");
    } else {
      plan.push("🏋️ Basic compound movements (squat, push-up, row)");
    }
  } else if (level === "intermediate") {
    plan.push("🏋️ 4-day upper/lower body split");
    plan.push("🏃 2x/week HIIT or cycling");
    if (ageModifier === "mature") {
      plan.push("🧘 Add mobility warmups before lifting");
    }
  } else if (level === "advanced") {
    plan.push("🔥 5–6 days push/pull/legs or body-part split");
    plan.push("💥 3x/week intense HIIT or interval training");
    if (gender === "male") {
      plan.push("📈 Include progressive overload tracking");
    } else {
      plan.push("🏋️‍♀️ Add glute/leg volume days");
    }
  }

  // Age-based adjustments
  if (ageModifier === "senior") {
    plan.push("⚠️ Focus on low-impact cardio & joint-friendly resistance bands");
  } else if (ageModifier === "mature") {
    plan.push("🦴 Prioritize core stability and posture exercises");
  }

  localStorage.setItem("plan", JSON.stringify(plan));
  localStorage.setItem("name", formData.get("name"));
  window.location.href = "plan.html";
});
