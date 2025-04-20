$(document).ready(function (e) {
  function addSpacesToNumbers(numbers) {
    return numbers
      .toString()
      .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  }

  function removeSpacesFromNumbers(numbers) {
    return parseInt(numbers.replace(/ (?=\d{3})/g, ""));
  }

  // slider
  $(".main-section__slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".rf-online__bottom-items,.unit-osago__bootom-item").owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      496: {
        items: 3,
        nav: false,
      },
      769: {
        items: 5,
      },
    },
  });

  $(".service-benefits__cl").owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".tab__body-cards.mobile").owlCarousel({
    margin: 25,
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
    },
  });

  $(".financial.mobile").owlCarousel({
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".service-benefits__items-msh").owlCarousel({
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".reasons_block.mobile").owlCarousel({
    nav: false,
    dots: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".unit-osago__bootom-item").owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      496: {
        items: 2,
      },
      769: {
        items: 3,
      },
      930: {
        items: 4,
      },
      1230: {
        items: 5,
      },
    },
  });

  $(".reason_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
    },
  });

  $(".policy_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // conditions blocks

  let conditionsOpenBtns = $(".conditions__btn");
  let conditionsCloseBtns = $(".conditions__btn__close");
  conditionsOpenBtns.each(function (btn) {
    $(this).on("click", function (e) {
      e.preventDefault();
      let conditionParent = $(this).parent().parent().parent();
      $(this).toggleClass("actived");
      conditionParent.toggleClass("actived");
      conditionParent.next("div").toggleClass("actived");
    });
  });
  conditionsCloseBtns.each(function (btn) {
    $(this).on("click", function (e) {
      e.preventDefault();
      let conditionsParent = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent();
      conditionsParent.removeClass("actived");
      conditionsParent.prev("div").removeClass("actived");
      conditionsParent
        .prev("div")
        .find(conditionsOpenBtns)
        .removeClass("actived");
    });
  });

  // conditions block items change (done!!!)

  let conditionsBlockBtns = $(".conditions__top-link");
  conditionsBlockBtns.each(function (btn) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(this).addClass("actived");
      $(this)
        .parent()
        .find(".conditions__top-link")
        .not(this)
        .removeClass("actived");
      let dataChangingName = $(this).attr("data-condition");
      let findBlocks = $(this).parent().parent().find(".conditions__list");
      findBlocks.each(function (block) {
        if ($(this).attr("data-condition") == dataChangingName) {
          $(this).addClass("actived");
          $(this).parent().addClass("actived");
          $(this).parent().find("table").not($(this)).removeClass("actived");
        }
      });
    });
  });

  // imask
  if ($(".inner_kredit_form_price").length) {
    IMask(document.querySelector(".inner_kredit_form_price"), {
      mask: Number,
      thousandsSeparator: " ",
    });
  }

  // tabs

  // quick-selection
  var buttons = document.querySelectorAll(".quick-selection .tab__head-link");

  buttons.forEach(function (index) {
    index.addEventListener("click", function (e) {
      e.preventDefault();
      var contentId = index.dataset.content;
      clearActive();
      clearContentActive();
      this.classList.add("active");
      document.querySelector("#" + contentId).classList.add("active");
    });
  });

  function clearActive() {
    buttons.forEach(function (index) {
      index.classList.remove("active");
    });
  }

  function clearContentActive() {
    document
      .querySelectorAll(".quick-selection .content")
      .forEach(function (index) {
        index.classList.remove("active");
      });
  }

  // best-deals
  var buttons2 = document.querySelectorAll(".best-deals .tab__head-link");

  buttons2.forEach(function (index) {
    index.addEventListener("click", function (e) {
      e.preventDefault();
      var contentId2 = index.dataset.content;
      clearActive2();
      clearContentActive2();
      this.classList.add("active");
      document.querySelector("#" + contentId2).classList.add("active");
    });
  });

  function clearActive2() {
    buttons2.forEach(function (index) {
      index.classList.remove("active");
    });
  }

  function clearContentActive2() {
    document.querySelectorAll(".best-deals .content").forEach(function (index) {
      index.classList.remove("active");
    });
  }

  // useful-articles
  var buttons3 = document.querySelectorAll(".useful-articles .tab__head-link");

  buttons3.forEach(function (index) {
    index.addEventListener("click", function (e) {
      e.preventDefault();
      var contentId3 = index.dataset.content;
      clearActive3();
      clearContentActive3();
      this.classList.add("active");
      document.querySelector("#" + contentId3).classList.add("active");
    });
  });

  function clearActive3() {
    buttons3.forEach(function (index) {
      index.classList.remove("active");
    });
  }

  function clearContentActive3() {
    document
      .querySelectorAll(".useful-articles .content")
      .forEach(function (index) {
        index.classList.remove("active");
      });
  }

  // financial-performance

  var buttons4 = document.querySelectorAll(
    ".financial-performance .tab__head-link"
  );

  buttons4.forEach(function (index) {
    index.addEventListener("click", function (e) {
      e.preventDefault();
      var contentId4 = index.dataset.content;
      clearActive4();
      clearContentActive4();
      this.classList.add("active");
      document.querySelector("#" + contentId4).classList.add("active");
    });
  });

  function clearActive4() {
    buttons4.forEach(function (index) {
      index.classList.remove("active");
    });
  }

  function clearContentActive4() {
    document
      .querySelectorAll(".financial-performance .content")
      .forEach(function (index) {
        index.classList.remove("active");
      });
  }

  // input-range

  const rangeInputs = document.querySelectorAll('input[type="range"]');
  const numberInput = document.querySelector('input[type="number"]');

  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }

  rangeInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
  });

  // numberInput.addEventListener('input', handleInputChange);

  // input and range kredit price
  let creditFilterClearBtn = $(".clear_filter .clear_filter-btn");
  let creditFilterBlock = $(".filterBlock-form");

  creditFilterClearBtn.on("click", (e) => {
    e.preventDefault();
    creditFilterBlock[0].reset();
  });

  let formPriceInp = $(".inner_kredit_form_price");
  let formPriceRange = $(".form-control-range");

  formPriceInp.on("input", function (e) {
    // console.log($(this).val())
    let creditSum = removeSpacesFromNumbers($(this).val());

    formPriceRange.val(creditSum);
    const min = formPriceRange.attr("min");

    const max = formPriceRange.attr("max");

    formPriceRange.css({
      "background-size": (creditSum / max) * 100 + "% 100%",
    });
  });

  formPriceRange.on("input", function (e) {
    let newVal = addSpacesToNumbers($(this).val());
    formPriceInp.val(newVal);
  });

  // extra options

  let showExtraOptionsOpenBtn = $(".kredit .consumer_collapse_btn");
  let extraOptions = $(".additional_parametr");

  showExtraOptionsOpenBtn.on("click", (e) => {
    e.preventDefault();
    extraOptions.toggleClass("showed");
    showExtraOptionsOpenBtn.toggleClass("opened");
    if (showExtraOptionsOpenBtn.hasClass("opened")) {
      showExtraOptionsOpenBtn.find("span").text("Свернуть");
    } else {
      showExtraOptionsOpenBtn.find("span").text("Доп. параметры");
    }
  });

  //

  var menuBtn = document.querySelector(".header__menu-btn");
  var productsDiv = document.querySelector("#my-div");
  var bar1 = document.querySelector(".bar1");
  var bar2 = document.querySelector(".bar2");
  var bar3 = document.querySelector(".bar3");

  menuBtn.addEventListener("click", function (e) {
    if (
      productsDiv.style.height === "0px" &&
      bar1.style.transform === "none" &&
      bar3.style.transform === "none" &&
      (bar2.style.opacity = "1")
    ) {
      productsDiv.style.height = "100%";
      productsDiv.style.opacity = "1";

      bar1.style.transform = "rotate(-45deg) translate(-6px, 6px)";
      bar2.style.opacity = "0";
      bar3.style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      productsDiv.style.height = "0px";
      productsDiv.style.opacity = "0";
      bar1.style.transform = "none";
      bar2.style.opacity = "1";
      bar3.style.transform = "none";
    }
  });

  // search-btn

  var searchOpen = document.querySelector(".header__search-form");
  var searchClose = document.querySelector(".closebtn");

  searchOpen.addEventListener("click", function (e) {
    document.querySelector("#myOverlay").style.display = "block";
  });

  searchClose.addEventListener("click", function (e) {
    document.querySelector("#myOverlay").style.display = "none";
  });

  var searchOpen = document.querySelector(".header__search-form");
  // var searchClose = document.querySelector('.closebtn');

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  $(".products__item-title").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("show");
    $(this).parent().find(".products__item-list").toggleClass("show");
  });

  $(".step_item:not(.step13) input[type=radio]").on("input", function (e) {
    e.preventDefault();
    nextStep = $(this).data("step") + 1;

    if (nextStep == 13) {
      currentProgressTimeLineWidth = 50;
      $(".progress_item.etap3").addClass("active");
      $(".calculator_results ul").html("");

      voditelCount = parseInt($(this).val());
      if (voditelCount < 2) {
        $(".voditel-1").addClass("active");
      } else if (voditelCount == 8) {
        $(".voditel-infinity").addClass("active");
      } else {
        $(".voditel-mnogo").addClass("active");
      }
    }

    let resultItem = "<li>" + $(this).val() + "<span>x</span></li>";
    $(".calculator_results ul").append(resultItem);
    $(".kasko .kasko_calculator .calculator_body .step_item").removeClass(
      "active"
    );
    $(".step" + nextStep).addClass("active");

    currentProgressTimeLineWidth = parseFloat(
      $(" .progress_timeline .progress_fill").data("width")
    );

    if ($(this).data("step") <= 7) {
      currentProgressTimeLineWidth += 5;
    }

    if ($(this).data("step") > 7 && $(this).data("step") <= 12) {
      currentProgressTimeLineWidth += 6.5;
    }

    $(".progress_timeline .progress_fill").data(
      "width",
      currentProgressTimeLineWidth
    );

    $(".progress_timeline .progress_fill").css({
      width: currentProgressTimeLineWidth + "%",
    });
  });

  $(".step_item input[type=range]").on("input", function (e) {
    e.preventDefault();
    $(".step_item input[name=automobile_price]").val($(this).val());
  });

  $(".step_item.step7 input[type=text]").on("input", function (e) {
    e.preventDefault();
    $(".step_item input[name=automobile_price]").val($(this).val());
  });

  $("input[type=range]").on("input", function (e) {
    let max = $(this).attr("max");
    if (!max) {
      max = 100;
    }
    let currentPercent = ($(this).val() / max) * 100;

    $(this).css({
      "background-size": currentPercent + "% 100%",
    });
  });

  $(".step_item .btn_confirm").on("click", function (e) {
    nextStep = $(this).data("step") + 1;
    $(".progress_timeline .progress_fill").css({
      width: "30%",
    });
    $(".calculator_results ul").html("");
    $(".kasko .kasko_calculator .calculator_body .step_item").removeClass(
      "active"
    );
    $(".step" + nextStep).addClass("active");
    $(".progress_item.etap2").addClass("active");
  });

  $(".calculator_body .action button").on("click", function (e) {
    e.preventDefault();
    $("#confirm_sms").modal("show");
  });

  $(".input-daterange,.date_picker").datepicker({
    orientation: "bottom",
    startDate: new Date(),
    language: "ru",
  });

  $(".add_tourist").on("click", function (e) {
    e.preventDefault();
    let maxTouristsCount = 3;
    let touristItem =
      "<span class='tourist_item'><span class='remove'><img src='images/close.png' alt=''></span><input name='tourists[]' placeholder='Возраст'></span>";
    if ($(".tourist_item").length < maxTouristsCount) {
      $(this).parent().prepend(touristItem);
    } else {
      alert("Максимальное количество туристов дольжен быть меньше 3");
    }

    $(".tourist_item .remove").on("click", function (e) {
      $(this).parent().remove();
    });
  });

  $(".tourist_item .remove").on("click", function (e) {
    $(this).parent().remove();
  });
  if ($(".select2").length) {
    $(".select2").select2({
      placeholder: "Не выбрано",
      allowClear: true,
    });
  }

  // function DatePiscers() {
  //
  //     $.datepicker.setDefaults({
  //       closeText: "Закрыть",
  //       prevText: "&#x3C;Пред",
  //       nextText: "След&#x3E;",
  //       currentText: "Сегодня",
  //       monthNames: [
  //         "Январь",
  //         "Февраль",
  //         "Март",
  //         "Апрель",
  //         "Май",
  //         "Июнь",
  //         "Июль",
  //         "Август",
  //         "Сентябрь",
  //         "Октябрь",
  //         "Ноябрь",
  //         "Декабрь",
  //       ],
  //       monthNamesShort: [
  //         "Янв",
  //         "Фев",
  //         "Мар",
  //         "Апр",
  //         "Май",
  //         "Июн",
  //         "Июл",
  //         "Авг",
  //         "Сен",
  //         "Окт",
  //         "Ноя",
  //         "Дек",
  //       ],
  //       dayNames: [
  //         "воскресенье",
  //         "понедельник",
  //         "вторник",
  //         "среда",
  //         "четверг",
  //         "пятница",
  //         "суббота",
  //       ],
  //       dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
  //       dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  //       weekHeader: "Нед",
  //       dateFormat: "dd.mm.yy", // Ruscha format: КК.ММ.ГГ
  //       firstDay: 1,
  //       isRTL: false,
  //       showMonthAfterYear: false,
  //       yearSuffix: "",
  //     });

  //     $("#from_date, #to_date").datepicker({
  //       dateFormat: "yy-mm-dd",
  //       changeMonth: true,
  //       changeYear: true,
  //     });
  //   }
  //   if ($("#from_date").length) {
  //     $("#from_date").on("change", function () {
  //       let minDate = $(this).val();
  //       $("#to_date").datepicker("option", "minDate", minDate);
  //     });
  //   }
  //   function calculateDays() {
  //     let fromDate = $("#from_date").val();
  //     let toDate = $("#to_date").val();

  //     if (fromDate && toDate) {
  //       let from = new Date(fromDate);
  //       let to = new Date(toDate);
  //       let difference = (to - from) / (1000 * 60 * 60 * 24) + 1; // Kunlar farqi

  //       if (difference < 0) {
  //         $(".den").text(
  //           "❌ Ошибка: 'Дата окончания' не может быть раньше 'Дата начала'!"
  //         );
  //         $("#to_date").val(""); // Xato bo‘lsa 'to_date'ni tozalash
  //       } else {
  //         $(".den").text(`${difference}`); // Farqni '.den' ga chiqarish
  //       }
  //     }
  //   }
  //   if ($("#from_date, #to_date").length) {
  //     $("#from_date, #to_date").on("change", calculateDays);
  //   }
  // }
  // DatePiscers();
  // function DatePiscers() {
  //   // Rus tilida sozlash
  //   $.datepicker.setDefaults({
  //     closeText: "Закрыть",
  //     prevText: "&#x3C;Пред",
  //     nextText: "След&#x3E;",
  //     currentText: "Сегодня",
  //     monthNames: [
  //       "Январь",
  //       "Февраль",
  //       "Март",
  //       "Апрель",
  //       "Май",
  //       "Июнь",
  //       "Июль",
  //       "Август",
  //       "Сентябрь",
  //       "Октябрь",
  //       "Ноябрь",
  //       "Декабрь",
  //     ],
  //     monthNamesShort: [
  //       "Янв",
  //       "Фев",
  //       "Мар",
  //       "Апр",
  //       "Май",
  //       "Июн",
  //       "Июл",
  //       "Авг",
  //       "Сен",
  //       "Окт",
  //       "Ноя",
  //       "Дек",
  //     ],
  //     dayNames: [
  //       "воскресенье",
  //       "понедельник",
  //       "вторник",
  //       "среда",
  //       "четверг",
  //       "пятница",
  //       "суббота",
  //     ],
  //     dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
  //     dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  //     dateFormat: "dd.mm.yy",
  //     firstDay: 1,
  //   });

  //   // Datepickerlarni ulash
  //   $("#from_date, #to_date").datepicker({
  //     changeMonth: true,
  //     changeYear: true,
  //   });

  //   // Bugungi sanani olish va formatlash
  //   let today = new Date();
  //   let dd = String(today.getDate()).padStart(2, "0");
  //   let mm = String(today.getMonth() + 1).padStart(2, "0");
  //   let yyyy = today.getFullYear();
  //   let todayFormatted = `${dd}.${mm}.${yyyy}`;

  //   // from_date ni "Туда - DD.MM.YYYY" qilish
  //   $("#from_date").val("Туда - " + todayFormatted);

  //   // Sana tanlanganda 'to_date' uchun minDate o‘rnatish
  //   $("#from_date").on("change", function () {
  //     let val = $(this).val().replace("Туда - ", "");
  //     $("#to_date").datepicker("option", "minDate", val);
  //   });

  //   // Kunlar farqini hisoblash
  //   function calculateDays() {
  //     let from = $("#from_date").val().replace("Туда - ", "");
  //     let to = $("#to_date").val();

  //     if (from && to) {
  //       let fromDate = $.datepicker.parseDate("dd.mm.yy", from);
  //       let toDate = $.datepicker.parseDate("dd.mm.yy", to);
  //       let diff = Math.round((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;

  //       if (diff < 0) {
  //         $(".den").text("❌ Ошибка: 'Обратно' раньше 'Туда'!");
  //         $("#to_date").val("");
  //       } else {
  //         $(".den").text("📅 Кол-во дней: " + diff);
  //       }
  //     }
  //   }

  //   $("#from_date, #to_date").on("change", calculateDays);
  // }
  // DatePiscers();
  // function DatePiscers() {
  //   if ($("#from_date, #to_date").length) {
  //     $.datepicker.setDefaults({
  //       closeText: "Закрыть",
  //       prevText: "&#x3C;Пред",
  //       nextText: "След&#x3E;",
  //       currentText: "Сегодня",
  //       monthNames: [
  //         "Январь",
  //         "Февраль",
  //         "Март",
  //         "Апрель",
  //         "Май",
  //         "Июнь",
  //         "Июль",
  //         "Август",
  //         "Сентябрь",
  //         "Октябрь",
  //         "Ноябрь",
  //         "Декабрь",
  //       ],
  //       monthNamesShort: [
  //         "Янв",
  //         "Фев",
  //         "Мар",
  //         "Апр",
  //         "Май",
  //         "Июн",
  //         "Июл",
  //         "Авг",
  //         "Сен",
  //         "Окт",
  //         "Ноя",
  //         "Дек",
  //       ],
  //       dayNames: [
  //         "воскресенье",
  //         "понедельник",
  //         "вторник",
  //         "среда",
  //         "четверг",
  //         "пятница",
  //         "суббота",
  //       ],
  //       dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
  //       dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  //       weekHeader: "Нед",
  //       dateFormat: "dd.mm.yy",
  //       firstDay: 1,
  //       isRTL: false,
  //       showMonthAfterYear: false,
  //       yearSuffix: "",
  //     });

  //     function formatDate(d) {
  //       let dd = String(d.getDate()).padStart(2, "0");
  //       let mm = String(d.getMonth() + 1).padStart(2, "0");
  //       let yyyy = d.getFullYear();
  //       return dd + "." + mm + "." + yyyy;
  //     }

  //     let today = new Date();
  //     let todayFormatted = formatDate(today);

  //     // Boshlang'ich qiymatlarni o'rnatish
  //     $("#from_date").val("Туда - " + todayFormatted);
  //     $("#to_date").val("Обратно - " + todayFormatted);

  //     // datepicker o'rnatish
  //     $("#from_date").datepicker({
  //       changeMonth: true,
  //       changeYear: true,
  //       onSelect: function (dateText) {
  //         $("#from_date").val("Туда - " + dateText);
  //         $("#to_date").datepicker("option", "minDate", dateText);
  //         calculateDays();
  //       },
  //       beforeShow: function (input, inst) {
  //         setTimeout(function () {
  //           $(".ui-datepicker").css("z-index", 9999); // Modalda bo‘lsa yordam beradi
  //         }, 0);
  //       },
  //     });

  //     $("#to_date").datepicker({
  //       changeMonth: true,
  //       changeYear: true,
  //       onSelect: function (dateText) {
  //         $("#to_date").val("Обратно - " + dateText);
  //         calculateDays();
  //       },
  //       beforeShow: function (input, inst) {
  //         setTimeout(function () {
  //           $(".ui-datepicker").css("z-index", 9999);
  //         }, 0);
  //       },
  //     });

  //     // Har safar foydalanuvchi o'zgartirsa hisoblash
  //     function calculateDays() {
  //       let fromVal = $("#from_date").val().replace("Туда - ", "").trim();
  //       let toVal = $("#to_date").val().replace("Обратно - ", "").trim();

  //       if (fromVal && toVal) {
  //         try {
  //           let fromDate = $.datepicker.parseDate("dd.mm.yy", fromVal);
  //           let toDate = $.datepicker.parseDate("dd.mm.yy", toVal);
  //           let diff =
  //             Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;

  //           if (diff < 0) {
  //             $(".den").text("0");
  //             $("#to_date").val("Обратно - ");
  //           } else {
  //             $(".den").text(diff);
  //           }
  //         } catch (e) {
  //           $(".den").text("0");
  //         }
  //       }
  //     }

  //     // Qo'l bilan yozilsa ham tekshir
  //     $("#from_date, #to_date").on("change", calculateDays);
  //   }
  // }
  // DatePiscers()
  function DatePiscers() {
    if ($("#from_date, #to_date").length) {
      $.datepicker.setDefaults({
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],
        monthNamesShort: [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июн",
          "Июл",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек",
        ],
        dayNames: [
          "воскресенье",
          "понедельник",
          "вторник",
          "среда",
          "четверг",
          "пятница",
          "суббота",
        ],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy", // Formatni shunday qilib o'zgartiring
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
      });

      // from_date va to_date uchun datepicker-ni ishga tushurish
      $("#from_date").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "c-100:c+10",
        onSelect: function (dateText) {
          $(this).val(
            $.datepicker.formatDate("dd.mm.yy", $(this).datepicker("getDate"))
          );
          $("#to_date").datepicker("option", "minDate", dateText);
          calculateDays();
          setTimeout(() => {
            $("#to_date").datepicker("show");
          }, 100); // to_date avtomatik ochiladi
        },
        beforeShow: function () {
          setTimeout(() => {
            $(".ui-datepicker").css("z-index", 9999);
          }, 0);
        },
      });

      $("#to_date").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "c-100:c+10",
        onSelect: function () {
          $(this).val(
            $.datepicker.formatDate("dd.mm.yy", $(this).datepicker("getDate"))
          );
          calculateDays();
        },
        beforeShow: function () {
          setTimeout(() => {
            $(".ui-datepicker").css("z-index", 9999);
          }, 0);
        },
      });

      // from_date va to_date orasidagi kunlarni hisoblash
      function calculateDays() {
        let fromVal = $("#from_date").val().trim();
        let toVal = $("#to_date").val().trim();

        if (fromVal && toVal) {
          try {
            let fromDate = $.datepicker.parseDate("dd.mm.yy", fromVal); // Formatni ham bu yerda to'g'ri belgilab qo'ying
            let toDate = $.datepicker.parseDate("dd.mm.yy", toVal); // Formatni ham bu yerda to'g'ri belgilab qo'ying

            let diff =
              Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;

            if (diff < 0) {
              $(".den").text("0");
              $("#to_date").val(""); // Agar to_date from_date'dan kichik bo'lsa, uni tozalash
            } else {
              $(".den").text(diff);
            }
          } catch (e) {
            $(".den").text("0");
          }
        } else {
          $(".den").text("0");
        }
      }

      // Sana formatini avtomatik to'g'rilash
      function formatDate(dateVal) {
        let dateParts = dateVal.split(".");

        if (dateParts.length === 3) {
          let day = dateParts[0];
          let month = dateParts[1];
          let year = dateParts[2];

          // Kun va oy raqamini to'ldirish (ikki raqamli)
          day = day.length === 1 ? "0" + day : day;
          month = month.length === 1 ? "0" + month : month;

          // Yilni to'ldirish
          if (year.length === 2) {
            year = "20" + year; // Agar yil 2 raqamli kiritilgan bo'lsa, uni to'liq 4 raqamli yilga o'zgartiramiz
          }

          return `${day}.${month}.${year}`;
        }

        return dateVal;
      }

      // from_date va to_date maydonlarida sana kiritish jarayonida formatlash
      $("#from_date, #to_date").on("input", function () {
        let currentVal = $(this).val();

        // . bilan ajratib sana formatini to'g'rilash
        let formattedDate = currentVal
          .replace(/[^0-9]/g, "")
          .replace(/(\d{2})(\d{2})(\d{2})/, "$1.$2.$3");
        $(this).val(formattedDate);

        // Sana formatini to'g'rilash
        let correctedVal = formatDate(formattedDate);
        $(this).val(correctedVal); // Sana formatini to'g'irlash

        calculateDays();
      });
    }
  }

  DatePiscers();

  $(".nomination").click(function (e) {
    e.stopPropagation();

    let $arrow = $(this).closest(".form_input").find(".arrow_down"); // Tegishli arrow_downni topish
    let $dropdown = $(this).closest(".form_input").find(".dropdown__menu"); // Tegishli dropdownni topish

    if ($arrow.hasClass("active")) {
      $arrow.removeClass("active");
      $dropdown.hide();
    } else {
      $(".dropdown__menu").hide();
      $arrow.addClass("active");
      $dropdown.show();
    }
  });
  let touristsArray = [];
  $(document).click(function (e) {
    if (
      !$(e.target).closest(".form_input, .arrow_down, .dropdown-menu").length
    ) {
      $(".dropdown__menu").hide();
    }
  });
  $("[name=tourists_count_text]").on("focus", function (e) {
    e.preventDefault();
    $(this).parent().addClass("show_select");
    $(this).addClass("active");
  });

  $(".add_new_tourist .dropdown-menu a").on("click", function (e) {
    e.preventDefault();
    const age = +$(this).text();

    if (touristsArray.length < 5) {
      touristsArray.push(age);
      generateTouristsHtmlView();
    } else {
      alert(quantityAlert);
    }
    const count = touristsArray.length;
    $('input[name="touristsCount"]').val(count);
    $(".tourists_count_number").text(count);
  });

  $(".add_new_tourist .dropdown-toggle").on("click", function () {
    $(".selected_count").slideDown();
  });
  // Dropdown ichidagi elementni bosganda yopilmasligi uchun
  $(".dropdown__menu label").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("active");
  });

  $(".dropdown__menu input[type='checkbox']").change(function () {
    let selected = [];
    $(".dropdown__menu input[type='checkbox']:checked").each(function () {
      selected.push($(this).val());
    });
    $("#selected-values").val(selected.join(","));
    $("#selected-values").removeClass("is-invalid");
  });
  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown__menu").length) {
      $(".dropdown__menu").hide();
    }
  });

  $(document).on("click", ".delete_item", function (e) {
    let deletedIndex = $(this).data("number");
    touristsArray.splice(deletedIndex, 1);
    $(".tourists_count").addClass("show_select");
    $(".tourists_count_number").text(touristsArray.length);
    $('input[name="touristsCount"]').val(touristsArray.length);
    e.preventDefault();
    e.stopPropagation();
  });
});
$(".form-group.form-groupitem #exampleCheck1").on("change", function () {
  if ($(this).is(":checked")) {
    $(".count_den_lists").slideDown();
  } else {
    $(".count_den_lists").slideUp();
  }
});
$(document).ready(function () {
  function updateTouristsCountText() {
    let newList = [];

    $(".input_count").each(function () {
      let val = $(this).val().trim();
      if (val !== "") {
        newList.push(val);
      }
    });

    if (newList.length > 0) {
      newList[newList.length - 1] = newList[newList.length - 1] + " года";
    }

    $('input[name="tourists_count_text"]').val(newList.join(", "));
  }

  // Turist qo‘shish
  $(document).on("click", ".add_new_tourist", function (e) {
    e.preventDefault();

    let $lastInput = $(".input_count").last();

    if ($lastInput.length > 0) {
      let inputVal = $lastInput.val().trim();

      if (inputVal === "") {
        return;
      }
    }

    let newItem = `<label class="selected_count_item">
                <span>Возраст</span>
                <input type="number" required class="input_count" maxlength="2" pattern="\d{2}"> 
                <div class="exit_count_item">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </label>`;
    $(".selected_count").append(newItem);

    updateTouristsCountText();
  });

  $(document).on("click", ".exit_count_item", function () {
    $(this).closest(".selected_count_item").remove();

    if ($(".selected_count_item").length === 0) {
      $('input[name="tourists_count_text"]').val("");
      return;
    }

    updateTouristsCountText();
  });

  $(document).on("input", ".input_count", function () {
    let value = $(this).val();
    // Agar qiymat ikki raqamli bo'lsa, boshqa raqamlarni kiritishga ruxsat bermang
    if (value.length > 2) {
      $(this).val(value.slice(0, 2)); // Faqat ikki raqamni olish
    }
    updateTouristsCountText();
  });

  $("input[type=checkbox].form-check-input").change(function () {
    const container = $(this).closest(".promocodes-check");
    const target = container.next(".slide_content-filter");

    if ($(this).is(":checked")) {
      target.slideDown(); // Checked bo‘lsa, ochiladi
    } else {
      target.slideUp(); // Unchecked bo‘lsa, yopiladi
    }
  });

  $(".calculating-tourist__buy-rightitem.long").each(function () {
    const $container = $(this);
    const $options = $container.find(".options");
    const $optNumber = $options.find(".opt_number");
    const $tab = $container.find(".calculating-tourist__buyright-tab");
    const optionCount = $container.find(".opplus11 li").length;

    // Boshlang'ich holat
    if (!$options.hasClass("active")) {
      $optNumber.text(optionCount + " опций");
      $tab.hide(); // boshlanishida yashirib qo'yamiz
    }

    // Click event
    $options.on("click", function (e) {
      e.preventDefault();

      const $this = $(this);
      $this.toggleClass("active"); // toggle active

      // Matnni almashtirish
      if ($this.hasClass("active")) {
        $optNumber.text("Скрыть условия");
      } else {
        $optNumber.text(optionCount + " опций");
      }

      // Tabni ko'rsatish / yashirish (slidetoggle)
      $tab.stop(true, true).slideToggle();
    });
  });

  $(".calculating-tourist__buy-rightitems").each(function () {
    let $containr = $(this);
    const $optionse = $containr.find(".calculating-tourist__buy-rightitem");
    $containr.find(".numbers").text($optionse.length - 1);
    console.log($optionse.length - 1);

    if ($optionse.length <= 2) {
      $optionse.css("box-shadow", "0 0 0  #fff");
      $containr.find(".all_turist_btn").css("visibility", "hidden");
    }

    $containr.find(".all_turist_btn").on("click", function (e) {
      $(this).toggleClass("active");
      $optionse.toggleClass("active");
    });
  });

  $(".buyvia__block-itemoption").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().prev().slideToggle();
    var textEl = $(".buyvia__block_text");

    if ($(this).hasClass("active")) {
      textEl.text("Скрыть опции");
    } else {
      textEl.text("Включенные опции");
    }
  });

  if ($('input[type="tel"]').length) {
    $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
  }
});

$('input[name="currency"]').on("change", function () {
  if ($(this).val() === "usd") {
    $(".sum_icon").text("$");
  } else if ($(this).val() === "euro") {
    $(".sum_icon").text("€");
  }
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".tourists_count").length) {
    $(".show_select input[name='tourists_count_text']").removeClass("active");
    $(".show_select").removeClass("show_select");
  }
});
$(".all_content_link").click(function (e) {
  e.preventDefault();

  $(this).prev(".all_contents-checks").slideToggle();

  $(this).toggleClass("active");

  // Matnni almashtirish
  let span = $(this).find("span");
  if ($(this).hasClass("active")) {
    span.text("Скрыть");
  } else {
    span.text("Показать все");
  }
});
// custom select
$(document).ready(function () {
  $(".custom_select_wrapper").each(function () {
    const $select = $(this);
    const $selected = $select.find(".custom_select_selected");
    const $options = $select.find(".custom_option");

    $selected.on("click", function () {
      $(".custom_select_wrapper").not($select).removeClass("open");
      $select.toggleClass("open");
    });

    $options.on("click", function () {
      const text = $(this).text();
      const value = $(this).data("value");

      $selected.text(text);
      $select.removeClass("open");

      console.log(`Tanlangan qiymat (${$select.data("name")}):`, value);
    });
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".custom_select_wrapper").length) {
      $(".custom_select_wrapper").removeClass("open");
    }
  });
});
// theinsured__form-item
$(document).ready(function () {
  function updateTouristTitles() {
    // .theinsured__form-item larni tanlaymiz, BIRINCHI ELEMENTNI SKIP QILAMIZ
    $(".theinsured__form-item")
      .slice(1)
      .each(function (index) {
        $(this)
          .find(".theinsured__form-title span:first")
          .text(index + 1 + " турист");
      });
  }

  function createTouristBlock(index) {
    return $(`
      <div class="theinsured__form-item">
          <h3 class="theinsured__form-title">
              <span>${index} турист</span>
              <button type="button" class="btn delete-btn">
                  <span class="delete">x Удалить</span>
              </button>
          </h3>
          <div class="theinsured__form-check">
              <input type="checkbox" class="form-check-input" id="check${index}">
              <label class="form-check-label" for="check${index}">Турист является страхователем</label>
          </div>
          <div class="theinsured__form-itemsection">
              <div class="form-group">
                  <label for="lastName${index}">Фамилия <span>, латинскими буквами, как в загранпаспорте</span></label>
                  <input type="text" class="form-control" id="lastName${index}" placeholder="IVANOV">
              </div>
              <div class="form-group">
                  <label for="firstName${index}">Имя <span>, латинскими буквами, как в загранпаспорте</span></label>
                  <input type="text" class="form-control" id="firstName${index}" placeholder="IVAN">
              </div>
              <div class="form-group">
                  <label for="birthDate${index}">Дата рождения</label>
                  <input type="date" class="form-control" id="birthDate${index}" placeholder="дд.мм.гггг">
              </div>
          </div>
      </div>
      `);
  }

  $(".theinsured__form-addtourist .btn").on("click", function () {
    const count = $(".theinsured__form-item").length; // avtomatik ravishda index
    const newBlock = createTouristBlock(count); // raqam shunchaki keyin update qilinadi
    $(".theinsured__form-addtourist").before(newBlock);
    updateTouristTitles();
  });

  $(document).on("click", ".delete", function () {
    $(this).closest(".theinsured__form-item").remove();
    updateTouristTitles();
  });

  // Page loadda ham tozalab chiqamiz
  updateTouristTitles();
});
function formValidation() {
  // Email tekshirish
  $("#exampleInputEmail1").on("input", function () {
    const emailVal = $(this).val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    $(this).toggleClass("is-invalid", !regex.test(emailVal));
  });

  // Telefon tekshirish
  $("#exampleInputEmail2").on("input", function () {
    const phoneVal = $(this).val().replace(/\D/g, ""); // faqat raqamlar
    $(this).toggleClass("is-invalid", phoneVal.length < 10);
  });

  // Familiya, Ism, Otchestvo - bo‘sh bo‘lmasligi kerak
  ["#exampleInputEmail3", "#exampleInputEmail4", "#exampleInputEmail5"].forEach(
    function (id) {
      $(id).on("input", function () {
        $(this).toggleClass("is-invalid", !$(this).val().trim());
      });
    }
  );

  // Tug‘ilgan sana
  $("#exampleInputEmail6").on("change input", function () {
    $(this).toggleClass("is-invalid", !$(this).val());
  });
}

formValidation();
$("form").on("submit", function (e) {
  let isValid = true;
  // Shu yerga yuqoridagi validatsiyalarni qayta chaqiramiz yoki shunchaki tekshiramiz
  $("input").each(function () {
    if ($(this).hasClass("is-invalid") || !$(this).val()) {
      $(this).addClass("is-invalid");
      isValid = false;
    }
  });

  if (!isValid) {
    e.preventDefault(); // formani jo‘natishni to‘xtatadi
  }
});
$("input[type='date']").datepicker({
  dateFormat: "yy-mm-dd",
});
