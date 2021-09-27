let url = window.location.href

if(url.indexOf("/j/")>0) {

  function replacer(match, p1, offset, string) {
    pwd = ""
    if(p1=="8727470836")pwd="?pwd=911"
    return ["/wc/",p1,"/join",pwd].join('')
  }

  window.location.href=url.replace(/\/j\/(\d*)/, replacer)

}
