//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const nameInput = document.getElementById('name');
      const ageInput = document.getElementById('age');

      // Check if inputs are not empty
      if (nameInput.value.trim() === '' || ageInput.value.trim() === '') {
        alert('Please fill out all fields');
        return;
      }

      // Create a promise for asynchronous processing
      const formSubmissionPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const age = parseInt(ageInput.value);

          if (age >= 18) {
            resolve(`Welcome, ${nameInput.value}. You can vote.`);
          } else {
            reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
          }
        }, 4000);
      });

      // Handle the promise resolution or rejection
      formSubmissionPromise
        .then(message => alert(message))
        .catch(message => alert(message));
    });
