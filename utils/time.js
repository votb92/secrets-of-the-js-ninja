function updateTime () {
  let currentDateTime = new Date();

  var hours = ('0'+currentDateTime.getHours()).slice(-2);
  var mins = ('0'+currentDateTime.getMinutes()).slice(-2);
  var seconds = ('0'+currentDateTime.getSeconds()).slice(-2);
  let formattedTime = hours + ":" + mins + ":" + seconds;

  $('#time').html(formattedTime)
}

export function clock () {
        setInterval(updateTime, 1000);
}
