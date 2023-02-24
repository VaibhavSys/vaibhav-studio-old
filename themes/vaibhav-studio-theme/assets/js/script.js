document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute("aria-current", "page");
        link.classList.add("active");
    }
});

var remark_config = {
    host: 'https://remark42.vaibhav.studio',
    site_id: 'remark',
    components: ['embeded', 'last-comments'],
    max_shown_comments: 100,
    theme: 'dark',
    locale: 'es',
    show_email_subscription: true,
    simple_view: false,
    no_footer: false
  }

!function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);