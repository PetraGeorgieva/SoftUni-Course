function extract(content) {
    let p = document.getElementById(content)
    let text = p.textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [...text.matchAll(pattern)].map(x=>x[1])
  
    return result.join('; ');
  }
  