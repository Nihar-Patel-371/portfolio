const projectsButton = document.getElementById('projectsButton');
const aboutButton = document.getElementById('aboutButton');
const projectsSection = document.getElementById('projectsSection');
const aboutSection = document.getElementById('aboutSection');

// Function to close all sections
function closeAllSections() {
  projectsSection.classList.remove('active');
  aboutSection.classList.remove('active');
  projectsButton.classList.remove('active'); // Remove active class from Projects Button
  aboutButton.classList.remove('active'); // Remove active class from About Button
}

// Function to scroll to the timeline
function scrollToTimeline() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Projects Button Click Event
projectsButton.addEventListener('click', function () {
  if (projectsSection.classList.contains('active')) {
    // If Projects Section is already open, close it and scroll to timeline
    closeAllSections();
    scrollToTimeline();
  } else {
    // If About Section is open, close it first
    if (aboutSection.classList.contains('active')) {
      closeAllSections();
    }
    // Open Projects Section and add active class to Projects Button
    projectsSection.classList.add('active');
    projectsButton.classList.add('active');
  }
});

// About Button Click Event
aboutButton.addEventListener('click', function () {
  if (aboutSection.classList.contains('active')) {
    // If About Section is already open, close it and scroll to timeline
    closeAllSections();
    scrollToTimeline();
  } else {
    // If Projects Section is open, close it first
    if (projectsSection.classList.contains('active')) {
      closeAllSections();
    }
    // Open About Section and add active class to About Button
    aboutSection.classList.add('active');
    aboutButton.classList.add('active');
  }
});