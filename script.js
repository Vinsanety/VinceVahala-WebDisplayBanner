const scrollingContainer = document.querySelector(
  ".scrolling-disclaimer_container"
);

const totalContentHeight = scrollingContainer.scrollHeight;

const duration = 12000;

let startTime;

const delay = 13000;

setTimeout(() => {
  requestAnimationFrame(scrollToBottom);
}, delay);

function scrollToBottom(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  const elapsedTime = timestamp - startTime;

  const scrollPosition = Math.min(
    totalContentHeight,
    (elapsedTime / duration) * totalContentHeight
  );

  scrollingContainer.scrollTop = scrollPosition;

  if (elapsedTime < duration) {
    requestAnimationFrame(scrollToBottom);
  }
}
