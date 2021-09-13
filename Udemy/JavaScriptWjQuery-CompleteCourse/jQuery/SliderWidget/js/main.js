$(document).ready(function () {
  var itemsLength = $('.cardSlider .item').length;
  var current = 1;

  $('.total_slide').text(itemsLength);
  $('.current_slide').text(current);

  $('.cardSlider .btn_prev').on('click', function () {
    if (current > 1) {
      current = current - 1;
      showSlider(current);
    } else {
      current = itemsLength;
      showSlider(current);
    }
  });

  $('.cardSlider .btn_next').on('click', function () {
    if (current !== itemsLength) {
      current = current + 1;
      showSlider(current);
    } else {
      current = 1;
      showSlider(current);
    }
  });

  function showSlider(sliderNumber) {
    $('.cards_container .item').removeClass('active');
    $("div[data-id='" + sliderNumber + "']").addClass('active');
    $('.current_slide').text(sliderNumber);
  }
});
