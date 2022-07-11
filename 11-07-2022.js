//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let http = url.split('http://').filter(n => n !== "")[0].split("https://").filter(n => n !== "")[0]
    let www = http.split("www.").filter(n => n !== "")[0].split(".")

    return www[0]
  }

domainName("https://www.cnet.com")