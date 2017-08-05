$(function() {
  setTimeout(resetTimer, 60000);
  $('#portaltimer').children('.txt').html("<span>残り時間: 無制限</span>");
});

function resetTimer() {
  $('#portaltimer').click();
}
