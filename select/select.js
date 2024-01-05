window.addEventListener("DOMContentLoaded", () => {
  const selectOptionsParent = document.querySelector(".selectOptions");

  const initialArray = ["Volkswagen", "Ford", "Toyota", "Nissan"];

  initialArray.forEach((item, index) => {
    let elem = document.createElement("li");
    elem.innerText = item;
    elem.setAttribute("index", index);
    elem.setAttribute("value", item);
    selectOptionsParent.append(elem);
  });

  const selectButton = document.querySelector(".selectToggle");
  const selectButtonValue = selectButton.querySelector(".buttonValue");
  const selectButtonIcon = selectButton.querySelector("i");

  const searchInput = document.querySelector(".searchInput input");

  const selectOptions = document.querySelectorAll(
    ".selectOptions li:not(.no_result)"
  );
  const searchNoResult = document.querySelector(".selectOptions .no_result");

  const wrapperDropdown = document.querySelector(".wrapperDropdown");

  const iconBottom = "fa fa-caret-down";
  const iconTop = "fa fa-caret-up";

  const show = { BLOCK: "block", NONE: "none" };

  let searchText = "";
  let selectValue = "";
  let activeButton = false;
  let selectOptionsArray = [];

  const toggleMenu = () => {
    activeButton = !activeButton;
    selectButtonIcon.className = activeButton === false ? iconBottom : iconTop;
    wrapperDropdown.style.display = activeButton === false ? show.NONE : show.BLOCK;

    selectButton.classList.toggle("active", activeButton === true);
  };

  const searchInputHandler = (text) => {
    const formatText = text.toLowerCase();
    searchText = formatText;
    const resultSearch = selectOptionsArray.filter((item) => {
      return item.text.toLowerCase().includes(searchText);
    });

    return resultSearch;
  };

  const selectButtonHandler = () => {
    toggleMenu();
  };

  const updateOptionDisplay = (active) => {
    selectOptions.forEach((item) => {
      item.style.display = active;
    });
  };

  const showSearchText = (active) => {
    searchNoResult.innerText = `Совпадений не найденно "${searchText}"`;
    searchNoResult.style.display = active;
  };

  const optionClickHandler = (event) => {
    const selectText = event.target.getAttribute("value");
    selectValue = selectText;
    selectButtonValue.innerText = selectValue;
    toggleMenu();
  };

  selectButton.addEventListener("click", () => {
    selectButtonHandler();
  });

  searchInput.addEventListener("input", (event) => {
    let resultArray = searchInputHandler(event.target.value);

    if (resultArray.length === 0) {
      updateOptionDisplay(show.NONE);
      showSearchText(show.BLOCK);
      return;
    }
    updateOptionDisplay(show.NONE);
    resultArray.forEach((option) => (option.elem.style.display = show.BLOCK));
    showSearchText(show.NONE);
  });

  selectOptions.forEach((option) => {
    option.addEventListener("click", optionClickHandler);
    selectOptionsArray.push({
      text: option.innerText,
      elem: option,
      index: option.getAttribute("index"),
      value: option.getAttribute("value"),
    });
    console.log(selectOptionsArray);
  });
});
