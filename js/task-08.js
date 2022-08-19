const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  // the first variant when we know what the inputs do we have
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.length === 0 || password.value.length === 0) {
    window.alert('All form fields must be filled');
  } else {
    const formInputs = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(formInputs);
    form.reset();
  }

  //the second variant when we don't know how many inputs we will have

  //   let notField = 0;
  //   let formInputs = {};
  //   const formElements = event.currentTarget.elements;
  //   for (let i = 0; i < formElements.length; i += 1) {
  //     if (formElements[i].tagName.toLowerCase() === 'input') {
  //       if (!formElements[i].value) {
  //         notField = 1;
  //       }
  //       formInputs = {
  //         ...formInputs,
  //         [formElements[i].name]: formElements[i].value,
  //       };
  //     }
  //   }
  //   if (notField === 1) {
  //     window.alert('All form fields must be filled');
  //   } else {
  //     console.log(formInputs);
  //     form.reset();
  //   }
});
