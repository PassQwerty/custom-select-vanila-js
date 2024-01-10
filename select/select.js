<<<<<<< HEAD
window.addEventListener("DOMContentLoaded", () => {
  const selectOptionsParent = document.querySelector(".selectOptions");
=======
export default {
  template: `
      <div class="select">
         <!-- Кнопка для открытия выпадающего списка -->
         <button type="button" @click="openDropDown" class="selectToggle" :class="{active: isActiveDropdown}">
            <span class="buttonValue">{{valueText}}</span>
            <i class="fa fa-caret-down"></i>
         </button>
         <div class="wrapperDropdown" :class="{ active: isActiveDropdown, no_active: !isActiveDropdown }" id="wrapperDropdown">
            <!-- Поиск -->
            <div class="wrapperSearch">
            <div class="searchInput">
               <input type="text" @input="Search" v-model="input">
               <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            </div>
            <!-- Выпадающий список -->
            <div class="selectDropdown">
            <ul class="selectOptions" id="selectOptions">
               <li v-for="item in filteredDropdownData" @click="clickItemHandler(item)" :key="item">{{item}}</li>
               <li v-if="filteredDropdownData.length === 0" class="no_result">Совпадений не найденно "{{input}}"</li>
            </ul>
            </div>
         </div>
      </div>
   `,
  emits: ["current-value"],
  props: {
    id: String,
    data: Array,
  },
  data() {
    return {
      isActiveDropdown: false,
      valueText: "Выберите опцию",
      input: "",
    };
  },
  methods: {
    clickItemHandler(text) {
      this.valueText = text;
      this.input = "";
      this.$emit('current-value', text);
      this.isActiveDropdown = false;
    },
    openDropDown() {
      this.isActiveDropdown = !this.isActiveDropdown;
      this.input = "";
    },
    closeDropdown(event) {
      const isClickInsideButton = event.target.closest(".selectToggle");
      const isClickInsideDropdown = event.target.closest(".wrapperDropdown");
      const isClickInsideSearch = event.target.closest(".wrapperSearch");
>>>>>>> d6ad290875a15589e923f0c3769b63e19288a976

      if (
        !isClickInsideButton &&
        !isClickInsideDropdown &&
        !isClickInsideSearch
      ) {
        this.isActiveDropdown = false;
      }
    },
    Search() {
      const inputValue = this.input;

<<<<<<< HEAD
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
    searchText = "";
    searchInput.value = "";

    updateOptionDisplay(show.BLOCK);
    showSearchText(show.NONE);

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
=======
      const formatText = inputValue.toLowerCase();
      return this.data.filter((item) => {
        return item.toLowerCase().includes(formatText);
      });
    },
  },
  computed: {
    filteredDropdownData() {
      return this.Search();
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },
  unmounted() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
>>>>>>> d6ad290875a15589e923f0c3769b63e19288a976
