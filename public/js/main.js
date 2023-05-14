const hamburgerButton = document.getElementById('hamburger-button');
    const hamburgerLinks = document.getElementById('hamburger-links');

    hamburgerButton.addEventListener('click', () => {
      hamburgerLinks.classList.toggle('hidden');
    });

    function getCurrentDate() {
      const currentDate = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = days[currentDate.getDay()];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthName = monthNames[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      const formattedTime = `${hours12}:${minutes} ${ampm}`;
      return `${dayName} | ${monthName} ${day} | ${formattedTime}`;
  }

  window.addEventListener('load', function() {
      
  });


    const getInfo = async (event) =>{
    event.preventDefault();
    const input = document.querySelector('.search').value;
    
    if(input === '')
    {
      
      let word = ' Please Enter argument! '
      showWarning(word)

    }
    else{
      try{
        // alert(input)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=0fdef2abecb1ad65d16115da7028d8e8`
        const response = await fetch(url)
        const data = await response.json()
        
        const city = document.querySelector('.location')
         city.innerHTML = `<i class="fa-solid fa-street-view icon" style="color : #fff"></i><span class="cityName">${data.name} , ${data.sys.country}</span>`

        const temp = document.querySelector('.temp')
        temp.innerHTML = data.main.temp+'&deg;C'

        const tempMinMax = document.querySelector('.tempmin_max')
        tempMinMax.innerHTML = `Min: ${data.main.temp_min}&deg;C | Max: ${data.main.temp_max}&deg;C `

        let weathercon = document.getElementById('weathercon')

        const tempStatus = data.weather[0].main

        if(tempStatus == "Sunny")
        {
            weathercon.innerHTML = " <i class='fa-regular fa-sun fa-2xl fa-beat' style='color : #eccc68'></i>"
        }
        else if(tempStatus == "Clouds"){
            weathercon.innerHTML = " <i class='fa-solid fa-cloud fa-2xl fa-beat' style='color : #eccc68'></i>"
        }
        else if(tempStatus == "Rainy"){
            weathercon.innerHTML = " <i class='fa-duotone fa-cloud-rain fa-2xl fa-beat' style='color : #eccc68'></i>"
        }
        else{
            weathercon.innerHTML = " <i class='fa-solid fa-cloud fa-2xl fa-beat' style='color : #eccc68'></i>"
        }

        let inDate = document.querySelector('#date')
        inDate.innerHTML = getCurrentDate()

        let mainBox = document.querySelector('.mainBox')
        mainBox.style.height = '60%'

      }
      catch(err)
      {
        // alert('No such city found!')
        let word = ' No such city found! ';
        showWarning(word);
      }

    }
  }

  const btn = document.getElementById('submitbtn')

  btn.addEventListener('click',getInfo)


  function showWarning(sen) {
    var warningDiv = document.getElementById("warning");
    warningDiv.classList.add("warning-visible");
    let wordW = document.querySelector('.wording')
    wordW.innerHTML = sen
    
    setTimeout(function() {
      warningDiv.classList.remove("warning-visible");
    }, 2000);
  }
  
