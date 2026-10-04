/* ============================================================
   app.js  —  8 Posts portfolio page.

   Renders the project grid from js/data.js — the SAME data.js
   that runs jasonbrewer.net. Keeps all the 8posts behaviour:
   category filters, scroll-in animation, and the video lightbox.

   TO SYNC THE TWO SITES:
     Copy jasonbrewer.net's  js/data.js  over this folder's
     js/data.js  and commit. That's the whole process — no build
     step, no Node, nothing else moves.

   Notes:
     - Thumbnails load from jasonbrewer.net (see BASE below), so no
       image files need to be copied into the 8posts repo.
     - A project is hidden from 8posts by adding  hide8:true  to it
       in data.js. Deleting that line brings it back.
     - Filter buckets are mapped from jasonbrewer's free-text
       categories in CAT_MAP; override per project with  cat:"..."
============================================================ */

(function () {
  "use strict";

  /* Where jasonbrewer.net's assets live. data.js stores relative
     paths like "assets/thumbs/x.png"; on 8posts we point them at
     the live site so nothing has to be copied over. */
  var BASE = "https://jasonbrewer.net/";

  /* jasonbrewer.net category  ->  8posts filter bucket.
     Tweak any line; or add  cat:"documentary"  on a project in
     data.js to override just that one. */
  var CAT_MAP = {
    "Documentary":             "documentary",
    "Digital Series":          "documentary",
    "International Production": "documentary",
    "Education":               "documentary",
    "Weather vs. Climate":     "documentary",
    "HGTV":                    "broadcast",
    "Broadcast Television":    "broadcast",
    "Broadcast / PBS":         "broadcast",
    "A&E":                     "broadcast",
    "Discovery Channel":       "broadcast",
    "Culinary":                "broadcast",
    "Series":                  "broadcast",
    "PBS":                     "broadcast",
    "Corporate":               "commercial",
    "Corporate Ads":           "commercial",
    "Advertising":             "commercial",
    "Institutional":           "commercial",
    "Cinematography":          "commercial",
    "Aerial":                  "commercial"
  };
  var CAT_DEFAULT = "broadcast";

  var HOME     = window.HOME || [];
  var PROJECTS = window.PROJECTS || [];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function abs(p) {
    if (!p) return p;
    if (/^(https?:|data:|#|mailto:)/i.test(p)) return p;   // already absolute
    return BASE + p.replace(/^\/+/, "");
  }

  function slugFromHref(href) {
    var m = /project\.html\?p=([^&]+)/.exec(href || "");
    return m ? m[1] : null;               // null = not a project tile (a collection)
  }

  /* first playable YouTube/Vimeo video on a project */
  function pickVideo(proj) {
    var list = [];
    if (proj.video) list.push(proj.video);
    if (Array.isArray(proj.videos)) list = list.concat(proj.videos);
    for (var i = 0; i < list.length; i++) {
      var v = list[i];
      if (v && (v.type === "youtube" || v.type === "vimeo") && v.id) {
        return { type: v.type, id: String(v.id) };
      }
    }
    return null;                          // no embeddable video -> no-video card
  }

  function bucketFor(proj) {
    return proj.cat || CAT_MAP[proj.category] || CAT_DEFAULT;
  }

  /* Build the card list from jasonbrewer's HOME order. */
  function buildItems() {
    var bySlug = {};
    PROJECTS.forEach(function (p) { bySlug[p.slug] = p; });

    var items = [];
    HOME.forEach(function (t) {
      var slug = slugFromHref(t.href);
      if (!slug) return;                  // skip collection tiles
      var proj = bySlug[slug] || {};
      if (proj.hide8) return;             // opt-out flag

      var v = pickVideo(proj);
      var item = {
        title:  t.title,
        client: proj.client || proj.category || "",
        img:    abs(t.thumb),
        cat:    bucketFor(proj)
      };
      if (v) { item.type = v.type; item.id = v.id; }
      items.push(item);
    });
    return items;
  }

  var ITEMS = buildItems();

  /* ---------- everything below is the original 8posts behaviour ---------- */

  var PLAY = '<span class="scrim"><span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span></span>';

  function embedURL(item) {
    if (item.type === "youtube") return "https://www.youtube.com/embed/" + item.id + "?autoplay=1&rel=0";
    if (item.type === "vimeo")   return "https://player.vimeo.com/video/" + item.id + "?autoplay=1";
    return null;
  }

  var grid = document.getElementById("grid");

  function render(items) {
    grid.innerHTML = "";
    items.forEach(function (item) {
      var hasVideo = !!item.type;
      var el = document.createElement(hasVideo ? "button" : "div");
      el.className = "card" + (hasVideo ? "" : " no-video");
      el.dataset.cat = item.cat;
      if (hasVideo) { el.type = "button"; el.setAttribute("aria-label", "Play " + item.title); }
      el.innerHTML =
        '<div class="thumb" data-title="' + esc(item.title) + '">' +
          '<img src="' + esc(item.img) + '" alt="' + esc(item.title) + '" loading="lazy">' +
          (hasVideo ? PLAY : "") +
        "</div>" +
        '<div class="meta">' +
          "<h3>" + esc(item.title) + "</h3>" +
          '<span class="client">' + esc(item.client || "") + "</span>" +
        "</div>";
      var img = el.querySelector("img");
      img.addEventListener("error", function () { img.closest(".thumb").classList.add("broken"); });
      if (hasVideo) el.addEventListener("click", function () { openLightbox(item); });
      grid.appendChild(el);
    });
    revealCards();
  }

  /* ---- filtering ---- */
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var f = btn.dataset.filter;
      render(f === "all" ? ITEMS : ITEMS.filter(function (i) { return i.cat === f; }));
    });
  });

  /* ---- scroll reveal (the tile-in animation) ---- */
  var io;
  function revealCards() {
    var cards = grid.querySelectorAll(".card");
    if (!("IntersectionObserver" in window)) { cards.forEach(function (c) { c.classList.add("in"); }); return; }
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add("in"); }, (i % 3) * 70);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    cards.forEach(function (c) { io.observe(c); });
  }

  /* ---- lightbox ---- */
  var lb = document.getElementById("lightbox");
  var lbFrame = document.getElementById("lbFrame");
  var lbClose = document.getElementById("lbClose");
  var lastFocused = null;

  function openLightbox(item) {
    var url = embedURL(item);
    if (!url) return;
    lastFocused = document.activeElement;
    lbFrame.innerHTML = '<iframe src="' + url + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }
  function closeLightbox() {
    lb.classList.remove("open");
    lbFrame.innerHTML = "";               // stop playback
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lb) lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb && lb.classList.contains("open")) closeLightbox();
  });

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var navlinks = document.getElementById("navlinks");
  if (toggle && navlinks) {
    toggle.addEventListener("click", function () {
      var open = navlinks.classList.toggle("show");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  render(ITEMS);
})();
