const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function resetTabs() {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "mb:border-b-0"
    );
  });
}

function hideAllPanels() {
  panels.forEach((panel) => panel.classList.add("hidden"));
}

function showPanel(classString) {
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function onTabClick(e) {
  // Deactivate all tabs
  resetTabs();

  // Hide all panels
  hideAllPanels();

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  showPanel(classString);
}
