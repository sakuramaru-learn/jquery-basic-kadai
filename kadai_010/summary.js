// idが「change-color」の要素がクリックされたとき
$('#change-color').on('click', function() {
  // idが「target」の文字色が赤に変化する
  $('#target').css('color', 'red');
});

// idが「change-text」の要素がクリックされたとき
$('#change-text').on('click', function() {
  // idが「target」の文字内容が「Hello!」に変化する
  $('#target').text('Hello!');
});

// idが「fade-out」の要素がクリックされたとき
$('#fade-out').on('click', function() {
  // idが「target」の文字が消える
  $('#target').fadeOut();
});

// idが「fade-in」の要素がクリックされたとき
$('#fade-in').on('click', function() {
  // idが「target」の文字が消える
  $('#target').fadeIn();
});