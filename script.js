//minimizar
document.addEventListener("DOMContentLoaded", () => {
  const windows = document.querySelectorAll(".window");

  windows.forEach(windowElement => {
    const minimizeBtn = windowElement.querySelector('button[aria-label="Minimize"]');
    const windowBody = windowElement.querySelector(".window-body");
    const titleBarText = windowElement.querySelector(".title-bar-text");

    if (minimizeBtn && windowBody && titleBarText) {
      let minimized = false;

      minimizeBtn.addEventListener("click", () => {
        if (!minimized) {
          windowBody.style.display = "none";
          windowElement.style.height = "30px";
          titleBarText.textContent += " (minimizada)";
          minimized = true;
        } else {
          windowBody.style.display = "block";
          windowElement.style.height = "auto";
          
          titleBarText.textContent = titleBarText.textContent.replace(" (minimizada)", "");
          minimized = false;
        }
      });
    }
  });
});

//tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");

      tabPanels.forEach(panel => panel.hidden = true);

      const targetId = tab.getAttribute("aria-controls");
      document.getElementById(targetId).hidden = false;
    });
  });
});
