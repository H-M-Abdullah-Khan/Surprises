// 
let EXPERIENCE = document.getElementById("EXPERIENCE");
let counter1 = 0;
let interval1 = null;

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval1 = setInterval(() => {
      if (counter1 == 1) {
        clearInterval(interval1);
      } else {
        counter1 += 1;
        EXPERIENCE.innerHTML = counter1 + "+";
      }
    }, 20);
  }
}, { threshold: 1.0 });

observer.observe(EXPERIENCE);

////
let PROJECTS = document.getElementById("PROJECTS");
let counter2 = 0;
let interval2 = null;

const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval2 = setInterval(() => {
      if (counter2 == 10) {
        clearInterval(interval2);
      } else {
        counter2 += 1;
        PROJECTS.innerHTML = counter2 + "+";
      }
    }, 100);
  }
}, { threshold: 1.0 });

observer2.observe(PROJECTS);

////
let CUSTOMERS = document.getElementById("CUSTOMERS");
let counter3 = 0;
let interval3 = null;

const observer3 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval3 = setInterval(() => {
      if (counter3 == 22) {
        clearInterval(interval3);
      } else {
        counter3 += 1;
        CUSTOMERS.innerHTML = counter3 + "+";
      }
    }, 20);
  }
}, { threshold: 1.0 });

observer3.observe(CUSTOMERS);

/////
let AWARDS = document.getElementById("AWARDS");
let counter4 = 0;
let interval4 = null;

const observer4 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval4 = setInterval(() => {
      if (counter4 == 7) {
        clearInterval(interval4);
      } else {
        counter4 += 1;
        AWARDS.innerHTML = counter4 + "+";
      }
    }, 100);
  }
}, { threshold: 1.0 });

observer4.observe(AWARDS);

/////
let c1 = document.getElementById("c1");
let counter5 = 0;
let interval5 = null;

const observer5 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval5 = setInterval(() => {
      if (counter5 == 100) {
        clearInterval(interval5);
      } else {
        counter5 += 1;
        c1.innerHTML = counter5 + "%";
      }
    }, 10);
  }
}, { threshold: 1.0 });

observer5.observe(c1);

/////
let c2 = document.getElementById("c2");
let counter6 = 0;
let interval6 = null;

const observer6 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval6 = setInterval(() => {
      if (counter6 == 80) {
        clearInterval(interval6);
      } else {
        counter6 += 1;
        c2.innerHTML = counter6 + "%";
      }
    }, 10);
  }
}, { threshold: 1.0 });

observer6.observe(c2);

/////
let c3 = document.getElementById("c3");
let counter7 = 0;
let interval7 = null;

const observer7 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval7 = setInterval(() => {
      if (counter7 == 70) {
        clearInterval(interval7);
      } else {
        counter7 += 1;
        c3.innerHTML = counter7 + "%";
      }
    }, 10);
  }
}, { threshold: 1.0 });

observer7.observe(c3);

/////
let c4 = document.getElementById("c4");
let counter8 = 0;
let interval8 = null;

const observer8 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    interval8 = setInterval(() => {
      if (counter8 == 95) {
        clearInterval(interval8);
      } else {
        counter8 += 1;
        c4.innerHTML = counter8 + "%";
      }
    }, 10);
  }
}, { threshold: 1.0 });

observer8.observe(c4);

/////
function createObserver(element, maxValue) {
  let counter = 0;
  let interval = null;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      interval = setInterval(() => {
        if (counter == maxValue) {
          clearInterval(interval);
        } else {
          counter += 1;
          element.innerHTML = counter + "%";
        }
      }, 10);
    }
  }, { threshold: 1.0 });

  observer.observe(element);
}

let c5 = document.getElementById("c5");
createObserver(c5, 20);

let c6 = document.getElementById("c6");
createObserver(c6, 100);

let c7 = document.getElementById("c7");
createObserver(c7, 90);

let c8 = document.getElementById("c8");
createObserver(c8, 85);