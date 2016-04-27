//common functions
  var username = document.getElementById("username"),
    password = document.getElementById("password"),
    urls = document.getElementById("urls"),
    dirs = document.getElementById("dirs"),
    delay = document.getElementById("delay"),
    result_box = document.getElementById("result_box"),
    textarea = document.getElementsByName("textarea"),
    fetch_on = document.getElementById("fetch-on"),
    fetch_off = document.getElementById("fetch-off"),
    fetch = "",
    pushs = document.getElementById("push");
  username.onchange = function() {
    this.setAttribute("data-username", this.value);
  };
  password.onchange = function() {
    this.setAttribute("data-password", this.value);
  };
  urls.onchange = function() {
    this.setAttribute("data-urls", this.value);
  };
  fetch_on.onclick = function() {
    fetch = "Y";
  };
  fetch_off.onclick = function() {
    fetch = "N";
  };
  dirs.onchange = function() {
    this.setAttribute("data-dirs", this.value);
  };
  delay.onchange = function() {
    this.setAttribute("data-delay", this.value);
  };
  pushs.onclick = function() {
    var datas = username.getAttribute("data-username") + password.getAttribute("data-password") + urls.getAttribute("data-urls").replace(/.*?:\/\//g, "").replace(/[\n]/g, ";") + dirs.getAttribute("data-dirs").replace(/.*?:\/\//g, "").replace(/[\n]/g, ";");
    console.log(datas);
    var md5 = hex_md5(datas);
    var path = [
      "http://wscp.lxdns.com:8080/wsCP/servlet/contReceiver?username=sdgcdn&passwd=",
      md5,
      "&fetchOption=",
      fetch,
      "&url=",
      urls.getAttribute("data-urls").replace(/.*?:\/\//g, "").replace(/[\n]/g, ";"),
      "&dir=",
      dirs.getAttribute("data-dirs").replace(/.*?:\/\//g, "").replace(/[\n]/g, ";"),
      "&delaytime=",
      delay.getAttribute("data-delay")
    ].join("");
    result_box.setAttribute("src", path);
  };
