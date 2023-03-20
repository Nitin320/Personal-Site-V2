export{}

    const cursor = document.querySelector('.cursor')
      document.addEventListener('mousemove', c => {
      cursor?.setAttribute("style", "top: "+(c.pageY - 10)+"px; left: "+(c.pageX - 10))
      })
