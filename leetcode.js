function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const diffulties = ["easy", "medium", "hard"];
for (const difficulty of diffulties) {
  waitForElm(`.text-difficulty-${difficulty}`).then((elm) => {
    elm.remove();
  });
}