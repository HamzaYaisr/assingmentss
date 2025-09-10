function askUsername() {
      var username = prompt("Enter your username:");

    
      for (var i = 0; i < username.length; i++) {
        var code = username.charCodeAt(i);

        if (code === 64 || code === 46 || code === 44 || code === 33) {
          alert("Invalid username! Do not use @ . , !");
          return askUsername(); 
        }
      }

      
      document.write("Welcome, " + username + "!");
    }
    askUsername();