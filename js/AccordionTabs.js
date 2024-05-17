const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

// Функция для переключения видимости
const toggleShow = () => {
    // Определяем цель клика (либо текущий элемент, либо его родитель)
    const target = event.currentTarget;
    const item = target.classList.contains("accordion-tab") 
    ? target 
    : target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    // Обработка вкладок
    tabs.forEach((tab) => {
        if (tab.dataset.actabGroup === group) {
            if (tab.dataset.actabId === id) {
                tab.classList.add("accordion-active");
            } else {
                tab.classList.remove("accordion-active");
            }
        }
    });

    // Обработка меток
    labels.forEach((label) => {
        const tabItem = label.parentElement;

        if (tabItem.dataset.actabGroup === group) {
            if (tabItem.dataset.actabId === id) {
                tabItem.classList.add("accordion-active");
            } else {
                tabItem.classList.remove("accordion-active");
            }
        }
    });
};

// Обработка событий для меток
labels.forEach((label) => {
    label.addEventListener("click", toggleShow);
});

// Обработка событий для вкладок
tabs.forEach((tab) => {
    tab.addEventListener("click", toggleShow);
});
