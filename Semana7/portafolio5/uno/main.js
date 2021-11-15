var card = document.querySelector('.card');
card.addEventListener('click', function () {
  card.classList.toggle('flip');
});

function myFunction(x) {
  card.classList.toggle('flip');
}

const number_one = document.querySelector('.number_one');
const number_two = document.querySelector('.number_two');
const number_three = document.querySelector('.number_three');
const number_four = document.querySelector('.number_four');
const div_number_one = document.querySelector('.div_number_one');
const div_number_two = document.querySelector('.div_number_two');
const div_number_three = document.querySelector('.div_number_three');
const div_number_four = document.querySelector('.div_number_four');

const holder = document.querySelector('.holder');
const div_holder_one = document.querySelector('.div_holder_one');

const expiration_one = document.querySelector('.expiration_one');
const expiration_two = document.querySelector('.expiration_two');
const div_expiration_one = document.querySelector('.div_expiration_one');
const div_expiration_two = document.querySelector('.div_expiration_two');

const ccv = document.querySelector('.ccv');
const div_ccv_one = document.querySelector('.div_ccv_one');

const button = document.querySelector('.btn');

holder.addEventListener('input', function (e) {
  div_holder_one.textContent = holder.value;

});


number_one.addEventListener('input', function (e) {
  div_number_one.textContent = number_one.value;
  if (4 === this.value.length) {
    number_two.focus();
  }
});
number_two.addEventListener('input', function (e) {
  div_number_two.textContent = number_two.value;
  if (4 === this.value.length) {
    number_three.focus();
  }
});
number_three.addEventListener('input', function (e) {
  div_number_three.textContent = number_three.value;
  if (4 === this.value.length) {
    number_four.focus();
  }
});
number_four.addEventListener('input', function (e) {
  div_number_four.textContent = number_four.value;
});
expiration_one.addEventListener('input', function (e) {
  div_expiration_one.textContent = expiration_one.value + "/";
});
expiration_two.addEventListener('input', function (e) {
  div_expiration_two.textContent = expiration_two.value;
});
ccv.addEventListener('input', function (e) {
  div_ccv_one.textContent = ccv.value;
});
