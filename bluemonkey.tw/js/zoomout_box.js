
"undefined" != typeof AOS && AOS.init({
    duration: 700,
    easing: "ease-out-quad",
    once: !0,
    startEvent: "load"
  }),
  function() {
    var e = document.querySelectorAll(".card-stack"),
      o = ["load", "resize", "scroll"];
    [].forEach.call(e, function(e) {
      var t = e.querySelectorAll(".card-stack-item");
      o.forEach(function(e) {
        window.addEventListener(e, function() {
          var d = [].slice.call(t).reverse();
          d.reduce(function(e, t, o) {
            var n = t.clientHeight + parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom")),
              a = e + (n - (d[o - 1] ? d[o - 1].offsetTop - t.offsetTop : n)) / n,
              r = t.firstElementChild,
              l = r.firstElementChild,
              c = "calc(-1rem * " + a + ")",
              i = "calc(1 - .2 * " + a + ")",
              s = "calc(1 - .03 * " + a + ")";
            return r.style.transform = "translateY(" + c + ") scale(" + s + ")", l.style.opacity = i, a
          }, 0)
        })
      })
    })
  }(),
  function() {
    var e = document.querySelectorAll("[data-typed]");
    "undefined" != typeof Typed && e && [].forEach.call(e, function(e) {
      var t = e.dataset.options ? JSON.parse(e.dataset.options) : {},
        o = Object.assign({
          typeSpeed: 30,
          backSpeed: 30,
          backDelay: 2e3,
          loop: !0
        }, t);
      new Typed(e, o)
    })
  }();
