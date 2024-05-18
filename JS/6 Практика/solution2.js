function attachEventsListeners() {
    document.querySelector('#daysBtn').addEventListener('click', function() {
      onClick('days');
    });
    document.querySelector('#hoursBtn').addEventListener('click', function() {
      onClick('hours');
    });
    document.querySelector('#minutesBtn').addEventListener('click', function() {
      onClick('minutes');
    });
    document.querySelector('#secondsBtn').addEventListener('click', function() {
      onClick('seconds');
    });
    function onClick(unit) {
      const daysInput = document.getElementById('days');
      const hoursInput = document.getElementById('hours');
      const minutesInput = document.getElementById('minutes');
      const secondsInput = document.getElementById('seconds');
  
      switch (unit) {
        case 'days':
          hoursInput.value = parseFloat(daysInput.value) * 24;
          minutesInput.value = parseFloat(daysInput.value) * 24 * 60;
          secondsInput.value = parseFloat(daysInput.value) * 24 * 60 * 60;
          break;
        case 'hours':
          daysInput.value = parseFloat(hoursInput.value) / 24;
          minutesInput.value = parseFloat(hoursInput.value) * 60;
          secondsInput.value = parseFloat(hoursInput.value) * 60 * 60;
          break;
        case 'minutes':
          daysInput.value = parseFloat(minutesInput.value) / (24 * 60);
          hoursInput.value = parseFloat(minutesInput.value) / 60;
          secondsInput.value = parseFloat(minutesInput.value) * 60;
          break;
        case 'seconds':
          daysInput.value = parseFloat(secondsInput.value) / (24 * 60 * 60);
          hoursInput.value = parseFloat(secondsInput.value) / (60 * 60);
          minutesInput.value = parseFloat(secondsInput.value) / 60;
          break;
      }
    }
  }  