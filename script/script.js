const container = document.querySelector('.container');
const sub = document.querySelector('.sub');
const btn = document.querySelectorAll('.rating button');

let target;
btn.forEach((key) => {
  key.onclick = (e) => {
    btn.forEach((key2) => {
      key2.classList.remove('active');
    });

    target = e.target.innerText;
    key.classList.add('active');
  };
});

sub.onclick = () => {
  container.innerHTML = ` <div class="img-selected">
<img src="./images/illustration-thank-you.svg" alt="" />
</div>

<div class="text-selected">
<div class="you-select">You Selected ${target} out of 5</div>
<h2>Thank You</h2>
<p>
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
</p>
</div>`;
};
